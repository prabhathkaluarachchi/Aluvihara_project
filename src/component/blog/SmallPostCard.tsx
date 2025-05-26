import { BlogPostType } from "./data/blogData";
import { Link } from "react-router-dom";

interface SmallPostCardProps {
  post: BlogPostType;
}

const SmallPostCard = ({ post }: SmallPostCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 h-full flex flex-col">
      {/* Image at top - fixed height */}
      <div className="w-full h-48 overflow-hidden flex-shrink-0">
        <img
          src={`/blog-images/${post.id}.jpg`}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'temple.jpg';
          }}
        />
      </div>

      {/* Content - flexible height */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
        
        {/* Footer - pushed to bottom */}
        <div className="mt-auto pt-4">
          <div className="flex justify-between items-center">
            <Link to={`/viewblog/${post.id}`}>
              <button className="text-[#EBB23E] text-sm hover:text-[#4B4B4B] font-medium">
                Read More →
              </button>
             </Link>
            <span className="text-xs text-[#4B4B4B]">Author: {post.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallPostCard;



