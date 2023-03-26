import "../styles/Carroussel.css"
type CarouselProps = { 
  images: string[];
};

const Carrousel: React.FC<CarouselProps> = ({ 
  images,
}) => {
  return (
    <div className="carousel-container">
      {images.map((src, index) => (
        <img
          src={src}
          key={index}
          className="carousel-img"
          style={{
            left: `${index * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Carrousel;
