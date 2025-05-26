interface BlogHeroProps {
  title: string;
  image: string;
}

const BlogHero = ({ title, image }: BlogHeroProps) => {
  return (
    <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[400px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center 25%",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative inset-0 bg-black/70 flex items-center justify-center rounded-md w-7xl mx-8 h-40">
        <h1 className="text-white/90 text-2xl md:text-4xl lg:text-5xl font-semibold text-center px-4">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default BlogHero;
