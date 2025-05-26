import { FiSearch } from "react-icons/fi";

const SearchBar = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
  return (
    <div className="mb-8 w-full lg:max-w-[65%]">

      <div className="flex items-center gap-2">
        {/* Search Input */}
        <div className="flex-grow">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search blogs..."
            className="w-full p-3 rounded-lg border-2 border-[#4B4B4B78] focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearchSubmit();
              }
            }}
          />
        </div>

        {/* Search Button (functional) */}
        <button
          onClick={onSearchSubmit}
          className="flex items-center justify-center bg-black text-[#EBB23E] px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors min-w-[100px]"
          aria-label="Search"
        >
          <FiSearch className="mr-2 text-white" />
          <span className="font-medium">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;







