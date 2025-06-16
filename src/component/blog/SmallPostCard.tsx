import { BlogPostType } from "./data/blogData";
import { Link } from "react-router-dom";

type Props = {
  post: BlogPostType;
};

const SmallPostCard = ({ post }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 h-full flex flex-col">
      <div className="w-full h-48 overflow-hidden flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4">
          <div className="flex justify-between items-center">
            <Link
              to={`/viewblog/${post.id}`}
              className="text-[#EBB23E] text-sm hover:text-[#4B4B4B] font-medium cursor-pointer"
            >
              Read More →
            </Link>

            <span className="text-xs text-[#4B4B4B]">
              Date: {post.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallPostCard;
