import { BlogPostType } from '../blog/types';
import { blogPosts } from "../../component/blog/data/blogData";
import { Link } from 'react-router-dom';

// interface RecentPostsSidebarProps {
//   posts: BlogPostType[];
// }

const RecentPostsSidebar = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold border-b pb-3">Most Popular</h3>
      <div className="space-y-4">
        {blogPosts.slice(0, 4).map((post) => (
          <Link className=''
            to={`/viewblog/${post.id}`}
            onClick={() => (window.location.href = `/viewblog/${post.id}`)}
          >
          <div key={post.id} className='my-4'>
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md">
              {/* Image - square aspect ratio */}
              <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border border-gray-100">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Title and Date 1*/}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-[#4B4B4B] hover:text-[#EBB23E] cursor-pointer line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1.5">{post.date}</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPostsSidebar;