import { useEffect, useState } from "react";
import SearchBar from "../component/blog/SearchBar";
import NavBar1 from "../component/common/NavBar1";
import Footer from "../component/common/Footer";

import BlogPost from "../component/blog/BlogPost";
import RecentPostsSidebar from "../component/blog/RecentPostsSidebar";
import SmallPostCard from "../component/blog/SmallPostCard";
import LoadMoreButton from "../component/blog/LoadMoreButton";
import { BlogPostType } from "../component/blog/types";
import Swal from "sweetalert2";
import BlogPageHero from "../component/blog/BlogPageHero";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [isSearchTriggered, setIsSearchTriggered] = useState(false);

  const featuredPost: BlogPostType = {
    id: "1",
    title: "The Revival of Buddhism by King Walagamba",
    excerpt:
      "In the last century BCE, King Walagamba stands as a symbol of resilience and devotion among Buddhist rulers...",
    content: "Full content here...",
    author: "Sumangala Thero",
    date: "05/05/2025",
  };

  const smallPosts: BlogPostType[] = [
    {
      id: "4",
      title: "Yokohi Provident™ in Abrukhara",
      excerpt:
        "Based on the name used in Arabic, Abraham Temple also reminds us of the Buddhist history...",
      content: "Full content here...",
      author: "John Eisenriegl",
      date: "March 2023",
    },
    {
      id: "5",
      title: "Ancient Buddhist Manuscripts",
      excerpt:
        "Exploring the preservation techniques of ancient palm leaf manuscripts...",
      content: "Full content here...",
      author: "Sarah Johnson",
      date: "February 2023",
    },
    {
      id: "6",
      title: "Meditation Techniques",
      excerpt: "Traditional meditation methods practiced for centuries...",
      content: "Full content here...",
      author: "Michael Chen",
      date: "January 2023",
    },
    {
      id: "7",
      title: "Temple Architecture",
      excerpt:
        "The symbolic meaning behind traditional Buddhist temple designs...",
      content: "Full content here...",
      author: "Priya Patel",
      date: "December 2022",
    },
    {
      id: "8",
      title: "Buddhist Festivals",
      excerpt: "Annual celebrations and their spiritual significance...",
      content: "Full content here...",
      author: "David Wilson",
      date: "November 2022",
    },
  ];

  const filteredPosts = smallPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            ? '<span class="text-[14px]">No matching posts found</span>'
            : "No matching posts found",
        icon: "error",
        ...swalOptions,
      });
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col overflow-x-hidden mx-auto">
        <NavBar1 page="blog" />
        <BlogPageHero />

        <main className="flex-grow w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 mx-auto relative overflow-hidden">
          <div className="mb-10 mt-30">
            <h1 className="text-[36px] text-[#373737] mb-4 font-[500]">
              Find Valuable Blogs Here,
            </h1>
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={handleSearch}
              onSearchSubmit={handleSearchButtonClick}
            />
          </div>

          {/* Search Results */}
          {searchQuery ? (
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Search Results:
              </h2>
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredPosts.map((post) => (
                    <SmallPostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <p className="text-[#EBB23E]">No matching posts found.</p>
              )}
            </div>
          ) : (
            <>
              {/* Featured and Sidebar */}
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <BlogPost post={featuredPost} />
                </div>
                <div className="lg:w-1/3">
                  <RecentPostsSidebar posts={smallPosts.slice(0, 3)} />
                </div>
              </div>

              {/* More Articles Section */}
              <section className="relative overflow-hidden" id="more-articles">
                {/* Background image */}
                <div
                  className="absolute top-0 right-0 h-full hidden sm:block pointer-events-none"
                  style={{ transform: "translateX(0%) scale(1)" }}
                >
                  <img
                    src="/img/test.png"
                    alt="Buddhist Art"
                    className="h-full object-contain opacity-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "test.png";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3 bg-transparent rounded-lg p-4">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        More Articles
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {smallPosts.slice(0, visiblePosts).map((post) => (
                          <SmallPostCard key={post.id} post={post} />
                        ))}
                      </div>

                      {visiblePosts < smallPosts.length && (
                        <LoadMoreButton
                          onClick={handleLoadMore}
                          isLoading={isLoading}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#222222] py-10 mt-30">
        <Footer />
      </footer>
      <div className="bg-[#1E1E1E] text-center py-3 text-[8px] md:text-xs text-ternary">
        <p>All rights reserved | Powered by All In One Holdings</p>
      </div>
    </>
  );
};

export default BlogPage;
