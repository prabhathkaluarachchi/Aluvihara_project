import { Link } from "react-router-dom";

interface BlogCardType {
  id: string;
  image: string;
  author: string;
  title: string;
}

const MostPopular = () => {
  const BlogCard: BlogCardType[] = [
    {
      id: "1",
      image: "/img/king.png",
      title: "The Revival of Buddhism by King Walagamba",
      author: "Author: Sumangala Thero.",
    },
    {
      id: "2",
      image: "/img/temple2.jpg",
      title: "A Sacred Journey: The History of Aluvihara Temple",
      author: "Author: Sumangala Thero.",
    },
    {
      id: "3",
      image: "/img/king.jpg",
      title: "A Sacred Journey: The History of Aluvihara Temple",
      author: "Author: Sumangala Thero.",
    },
    {
      id: "4",
      image: "/img/temple.jpg",
      title: "A Sacred Journey: The History of Aluvihara Temple",
      author: "Author: Sumangala Thero.",
    },
  ];

  return (
    <div className="lg:max-w-7xl mx-auto px-4 lg:px-4 relative mt-20 md:mt-30">
      <h2 className="text-xl font-semibold text-[#4B4B4B]/60 mb-4">
        Most Popular
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {BlogCard.map((card) => (
          <Link
            to={`/viewblog/${card.id}`}
            onClick={() => (window.location.href = `/viewblog/${card.id}`)}
          >
            <div
              key={card.id}
              className="w-full max-w-xs transition overflow-hidden shadow-sm shadow-gray-400 hover:shadow-md cursor-pointer mx-auto"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-gray-800 leading-6">
                  {card.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">{card.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
