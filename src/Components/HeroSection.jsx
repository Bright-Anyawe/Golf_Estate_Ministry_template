import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of hero images and content
  const heroContent = [
    {
      src: "/Cop welcome image.png", // Update path accordingly
      alt: "Church of Pentecost welcome image",
      title: "Welcome to Golf Estate Assembly",
      subtitle: "A place to belong, believe and become",
      buttonText: "Join Us Sunday",
      buttonLink: "/visit",
    },
    {
      src: "/images/church-image-2.jpg", // Update path accordingly
      alt: "Golf Estate Assembly worship service",
      title: "Experience Worship",
      subtitle: "Come and encounter God's presence with us",
      buttonText: "Service Times",
      buttonLink: "/services",
    },
    {
      src: "/images/church-image-3.jpg", // Update path accordingly
      alt: "Golf Estate Assembly community",
      title: "Growing Together in Faith",
      subtitle: "Join our community of believers",
      buttonText: "Get Connected",
      buttonLink: "/connect",
    },
  ];

  // Rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [heroContent.length]);

  return (
    <div className="hero-section">
      <section className="bg-slate-200 dark:bg-slate-900 text-white text-center overflow-hidden">
        <div className="w-full h-full max-w-full max-h-full relative overflow-hidden px-3 sm:px-5 md:px-10 lg:px-10 py-3 sm:py-5 md:pt-3 lg:py-5">
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden">
            {heroContent.map((content, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={content.src || "/placeholder.svg"}
                  alt={content.alt}
                  className="object-cover rounded-3xl w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 rounded-3xl flex flex-col items-center justify-center p-6 md:p-12">
                  <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                      {content.title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90">
                      {content.subtitle}
                    </p>
                    <Link
                      to={content.buttonLink}
                      className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                    >
                      {content.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
              {heroContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-white scale-110" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
