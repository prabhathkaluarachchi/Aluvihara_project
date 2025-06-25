import { useParams } from "react-router-dom";
import BlogHero from "../component/blog/BlogHero";
import { blogPosts } from "../component/blog/data/blogData";
import NavBar1 from "../component/common/NavBar1";
import Footer from "../component/common/Footer";
import MostPopular from "../component/blog/MostPopular";
import { useEffect } from "react";
import RecentPostsSidebar from "../component/blog/RecentPostsSidebar";


const ViewBlogPost: React.FC = () => {
  //top mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();
  const blog = blogPosts.find((post) => post.id === id);

  const p1 = blog?.content.find((p) => p._id === "p1");
  const p2 = blog?.content.find((p) => p._id === "p2");
  const p2bh = blog?.content.find((p) => p._id === "p2bh");
  const p2bh2 = blog?.content.find((p) => p._id === "p2bh2");
  const p2bh3 = blog?.content.find((p) => p._id === "p2bh3");
  const p2bc = blog?.content.find((p) => p._id === "p2bc");
  const p2bc2 = blog?.content.find((p) => p._id === "p2bc2");
  const p2bc3 = blog?.content.find((p) => p._id === "p2bc3");
  const p2c = blog?.content.find((p) => p._id === "p2c");
  const p3 = blog?.content.find((p) => p._id === "p3");
  const p3b = blog?.content.find((p) => p._id === "p3b");
  const p4a = blog?.content.find((p) => p._id === "p4a");
  const p4 = blog?.content.find((p) => p._id === "p4");
  const p5 = blog?.content.find((p) => p._id === "p5");
  const p6 = blog?.content.find((p) => p._id === "p6");

  const p2h = blog?.content.find((p) => p._id === "p2h");
  const p3h = blog?.content.find((p) => p._id === "p3h");
  const p4h = blog?.content.find((p) => p._id === "p4h");
  const p5h = blog?.content.find((p) => p._id === "p5h");
  const p6h = blog?.content.find((p) => p._id === "p6h");

  if (!blog) {
    return (
      <h1 className="text-center text-4xl font-bold mt-10">
        Blog post not found.
      </h1>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-col overflow-x-hidden font-roboto relative">
        <NavBar1 page="" />
        <div className="relative">
          {/* Right-side background image */}
          <img
            src="/img/bgSide.jpg"
            alt="King Walagamba"
            className="absolute top-96 md:mt-72 lg:mt-32 right-0 w-md opacity-10 pointer-events-none select-none hidden md:block z-10"
          />
          <BlogHero title={blog.title} image={blog.image} />

          <div className="relative mt-20 md:mt-30 lg:mt-5 lg:w-5/6 mx-auto lg:flex">
            <div className="lg:w-2/3">
              <div className="absolute bg-[#F7F6F6] h-full w-full lg:w-8/12 mt-18 z-0 -left-24"></div>
              <div className="max-w-7xl mx-auto px-7 lg:px-4 lg:w-full">
                <div className="mb-8 font-semibold relative z-20 ">
                  <h1 className="text-2xl mb-2 text-transparent">
                    Author: {blog.author}
                  </h1>
                  <p className="text-md text-transparent">{blog.date}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 text-[18px] font-light leading-7 text-justify text-secondary relative z-20 lg:mr-5 mt-12">
                  {p1 && (
                    <div className="md:col-span-3">
                      <p>{p1.content}</p>
                    </div>
                  )}

                  <div className="md:col-span-3 grid md:grid-cols-3 gap-12">
                    {/* Left side */}
                    <div className="md:col-span-2 space-y-6">
                      {p2h && (
                        <h6 className="font-medium leading-2">{p2h.content}</h6>
                      )}
                      {p2 && (
                        <p>
                          {p2.content}
                          {/* list data 1 */}
                          {p2bh && (
                            <span className="font-normal">{p2bh.content}</span>
                          )}
                          {p2bc && <span>{p2bc.content}</span>}
                          {/* list data 2 */}
                          {p2bh2 && (
                            <span className="font-normal">{p2bh2.content}</span>
                          )}
                          {p2bc2 && <span>{p2bc2.content}</span>}
                          {/* list data 3 */}
                          {p2bh3 && (
                            <span className="font-normal">{p2bh3.content}</span>
                          )}
                          {p2bc3 && <span>{p2bc3.content}</span>}
                          {p2c && <p className="mt-2">{p2c.content}</p>}
                        </p>
                      )}
                      {p3h && (
                        <h6 className="font-medium leading-2">{p3h.content}</h6>
                      )}
                      {p3 && <p>{p3.content}</p>}
                    </div>

                    {/* Right side */}
                    <div className="flex justify-end items-center py-2">
                      <img
                        src={blog.image2}
                        alt="King Walagamba"
                        className="w-full h-full object-cover "
                      />
                    </div>
                  </div>
                  {p3b && (
                    <div className="md:col-span-3">
                      <p>{p3b.content}</p>
                    </div>
                  )}
                  {p4h && (
                    <h6 className="font-medium md:col-span-3">{p4h.content}</h6>
                  )}
                  {p4 && (
                    <div className="md:col-span-3">
                      {p4a && <p className="mb-2">{p4a.content}</p>}
                      <p>{p4.content}</p>
                    </div>
                  )}
                  {p5h && (
                    <h6 className="font-medium leading-2 md:col-span-3">
                      {p5h.content}
                    </h6>
                  )}
                  {p5 && (
                    <div className="md:col-span-3">
                      <p>{p5.content}</p>
                    </div>
                  )}
                  {p6h && (
                    <h6 className="font-medium leading-2 md:col-span-3">
                      {p6h.content}
                    </h6>
                  )}
                  {p6 && (
                    <div className="md:col-span-3">
                      <p>{p6.content}</p>
                    </div>
                  )}
                </div>
              </div>
              <img
                src="/img/Group19.png"
                className="mt-8 w-11/12 md:mt-20 relative z-50 -left-0"
              />
            </div>

            <div 
            className="hidden lg:block lg:w-1/3 lg:mt-20">
              <RecentPostsSidebar />
            </div>
          </div>
        </div>

        <MostPopular />
      </div>

      {/* footer section */}
      <div className="mt-30">
        <footer className="bg-[#222222] py-10">
          <Footer />
        </footer>
        {/* copyrights */}
        <div className="bg-[#1E1E1E] text-center py-3 text-[8px] md:text-xs text-ternary">
          <p>All rights reserved | Powered by All In One IT Solutions</p>
        </div>
      </div>
    </>
  );
};

export default ViewBlogPost;
