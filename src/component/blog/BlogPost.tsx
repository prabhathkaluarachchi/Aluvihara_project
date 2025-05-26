import { Link } from "react-router-dom";
interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category?: string;
}
interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="mb-8 bg-[#F7F6F6] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Featured Image */}
      <div className="w-full overflow-hidden">
        <img
          src={`/blog-images/${post.id}.jpg`}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/img/king.png";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-3xl md:text-3xl text-[#4B4B4B] font-roboto font-[500]">
            {post.title}
          </h2>
          <span className="text-sm text-[#70707030] mt-1 whitespace-nowrap font-roboto">
            {post.date}
          </span>
        </div>

        <p className="text-[#4F4C53] text-[20px] font-medium leading-[35px] line-clamp-5 mb-6 font-roboto text-justify">
          {post.excerpt}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-[#4B4B4B] font-roboto">
            Author: {post.author}
          </span>
          <Link
            to={`/viewblog/${post.id}`}
            className="bg-transparent border-[2px] border-[#EBB23E] hover:bg-[#EBB23E]/80 text-[#EBB23E] hover:text-[#FFFFFF]/80 font-medium text-lg px-6 py-2 rounded-[10px] transition-colors duration-300 font-roboto"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
