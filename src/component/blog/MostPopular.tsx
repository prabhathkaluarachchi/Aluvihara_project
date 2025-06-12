import { Link } from "react-router-dom";
import { blogPosts } from "../../component/blog/data/blogData";

const MostPopular = () => {
  return (
    <div className="lg:max-w-7xl mx-auto px-4 lg:px-4 relative mt-20 md:mt-30 pb-4">
      <h2 className="text-xl font-semibold text-[#4B4B4B]/60 mb-4">
        Most Popular
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {blogPosts.slice(0, 4).map((post) => (
          <Link
            to={`/viewblog/${post.id}`}
            onClick={() => (window.location.href = `/viewblog/${post.id}`)}
          >
            <div
              key={post.id}
              className="w-full max-w-xs transition overflow-hidden shadow-sm shadow-gray-400 hover:shadow-md cursor-pointer mx-auto"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-gray-800 leading-6">
                  {post.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">{post.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
