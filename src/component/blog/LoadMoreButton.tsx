interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

const LoadMoreButton = ({
  onClick,
  isLoading = false,
}: LoadMoreButtonProps) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="bg-transparent mb-16 border-[2px] border-[#EBB23E
] hover:bg-[#EBB23E] text-[#EBB23E] hover:text-[#FFFFFF] font-medium text-lg px-6 py-2 rounded-[10px] transition-colors duration-300 font-roboto"
      >
        {isLoading ? "Loading..." : "Load More Blogs"}
      </button>
    </div>
  );
};

export default LoadMoreButton;
