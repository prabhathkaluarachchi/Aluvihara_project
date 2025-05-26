import { BlogPostType } from '../blog/types';

interface RecentPostsSidebarProps {
  posts: BlogPostType[];
}

const RecentPostsSidebar = ({ posts }: RecentPostsSidebarProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-6 border-b pb-3">Most Popular</h3>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md">
              {/* Image - square aspect ratio */}
              <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border border-gray-100">
                <img 
                  src={`/blog-images/${post.id}.jpg`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'blog.jpg';
                  }}
                />
              </div>
              {/* Title and Date */}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-[#4B4B4B] hover:text-[#EBB23E] cursor-pointer line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1.5">{post.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPostsSidebar;