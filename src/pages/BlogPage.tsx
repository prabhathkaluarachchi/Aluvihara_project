import { useEffect, useState } from "react";
import SearchBar from "../component/blog/SearchBar";
import NavBar1 from "../component/common/NavBar1";
import Footer from "../component/common/Footer";
import BlogPost from "../component/blog/BlogPost";
import RecentPostsSidebar from "../component/blog/RecentPostsSidebar";
import SmallPostCard from "../component/blog/SmallPostCard";
import LoadMoreButton from "../component/blog/LoadMoreButton";
import { BlogPostType } from "../component/blog/types";
import BlogHero from "../component/blog/BlogHero";
import Swal from "sweetalert2";
import BlogPageHero from "../component/blog/BlogPageHero";
import { blogPosts } from "../component/blog/data/blogData";

const BlogPage = () => {
  //top mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isSearchTriggered, setIsSearchTriggered] = useState(false);

  // Mock data
  const featuredPost: BlogPostType = {
    id: "1",
    title: "Aluvihare and the Sacred History of the Thripitakaya: A Legacy Carved in Stone",
    excerpt:
      "Nestled among the serene hills of Matale in Sri Lanka lies Aluvihare Rock Temple, a sacred site of profound historical and spiritual importance. While the temple itself is a testament to ancient Buddhist architecture and devotion, it holds a deeper significance in the chronicles of Buddhist heritage—it is the revered location where the Thripitakaya (or Tipitaka) was first committed to writing.",
    content: "Full content here...",
    author: "Sumangala Thero",
    date: "05/05/2025",
    image: "/img/king.png",
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisiblePosts((prev) => prev + 4);
      setIsLoading(false);
    }, 1000);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearchButtonClick = () => {
    setIsSearchTriggered(true);

    const swalOptions = {
      confirmButtonText: "OK",
      customClass: {
        confirmButton:
          "bg-[#181415] text-[#EBB23E] text-[18px] rounded-[10px] px-6 py-2 hover:opacity-80 transition duration-300",
      },
      buttonsStyling: false,
    };

    if (searchQuery.trim() === "") {
      Swal.fire({
        title: "Please enter a search term",
        icon: "warning",
        ...swalOptions,
      });
    } else if (filteredPosts.length > 0) {
      Swal.fire({
        title: "All blogs are found",
        icon: "success",
        ...swalOptions,
      });
    } else {
      Swal.fire({
        title:
          window.innerWidth < 768
            ? '<span class="text-[14px] ">No matching posts found</span>'
            : "No matching posts found",
        icon: "error",
        ...swalOptions,
      });
    }
  };

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen flex text-[#181415] flex-col overflow-x-hidden  w-full">
        <NavBar1 page="blog" />
        <BlogPageHero />

        <main className="flex-grow relative overflow-hidden">
          <div className="mb-10 mt-30 w-5/6 mx-auto">
            <h1 className="text-[36px] text-[#373737] mb-4 font-[500]">
              Find Valuable Blogs Here,
            </h1>
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={(query: any) => {
                handleSearch(query); // live search update
              }}
              onSearchSubmit={handleSearchButtonClick} // triggers SweetAlert
            />
          </div>

          {/* Show search results live while typing */}
          {searchQuery ? (
            <div className="mt-4 w-5/6 mx-auto">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Search Results:
              </h2>
              {blogPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="h-full">
                      <SmallPostCard post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#EBB23E]">No matching posts found.</p>
              )}
            </div>
          ) : (
            <>
              {/* Featured and Sidebar */}
              <div className="flex flex-col lg:flex-row w-5/6 mx-auto gap-8">
                <div className="lg:w-2/3">
                  <BlogPost post={featuredPost} />
                </div>
                <div className="lg:w-1/3">
                  <RecentPostsSidebar />
                </div>
              </div>

              {/* More Articles Section */}
              <section className="mt-16 relative w-full">
                <div className="relative z-10 w-5/6 mx-auto">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3 bg-transparent bg-opacity-90 rounded-lg p-4">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        More Articles
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogPosts.slice(0, 4).map((post) => (
                          <div key={post.id}>
                            <SmallPostCard post={post} />
                          </div>
                        ))}
                      </div>

                      {/* {visiblePosts < blogPosts.length && (
                        <LoadMoreButton
                          onClick={handleLoadMore}
                          isLoading={isLoading}
                        />
                      )} */}
                    </div>
                  </div>
                </div>

                {/* Buddhist Art Image - right aligned, smaller, scrolls with content */}
                <div className="absolute lg:-top-40 -top-20 right-0 w-[500px] hidden sm:block pointer-events-none">
                  <img
                    src="/img/test.png"
                    alt="Buddhist Art"
                    className="w-full h-auto object-contain opacity-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "test.png";
                    }}
                  />
                </div>
              </section>
            </>
          )}
        </main>
      </div>

      {/* footer section */}
      <div className="mt-30">
        <footer className="bg-[#222222] py-10">
          <Footer />
        </footer>
        {/* copyrights */}
        <div className="bg-[#1E1E1E] text-center py-3 text-[8px] md:text-xs text-ternary">
          <p>All rights reserved | Powered by All In One Holdings</p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
