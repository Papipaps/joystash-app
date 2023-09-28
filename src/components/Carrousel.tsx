import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../styles/Carroussel.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type CarouselProps = {
  images: string[];
};

const Carrousel: React.FC<CarouselProps> = ({ images }) => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const carouselImg = useRef<HTMLImageElement>(null);
  const intervalRef = useRef<number | null>(null);
  const CAROUSEL_TIME = 5000;

  function resetInterval() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCarouselIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
      }, CAROUSEL_TIME);
    }
  }

  function handleNextImage() {
    setCarouselIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    resetInterval();
  }

  function handlePreviousImage() {
    setCarouselIndex((prev) => (prev !== 0 ? prev - 1 : images.length - 1));
    resetInterval();
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCarouselIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
    }, CAROUSEL_TIME);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const carousel = carouselImg.current;
    if (carousel) {
      console.log(carousel);
      let ctx = gsap.context(() => {
        gsap.fromTo(
          carousel,
          { filter: "blur(2px)", opacity: 0.7 },
          { filter: "blur(0px)", opacity: 1, duration: 2 }
        );
      });
      return () => ctx.revert();
    }
  }, [carouselIndex]);

  return (
    <div className="carousel-container">
      <ChevronLeftIcon
        className="carousel-left"
        onClick={handlePreviousImage}
      />
      <ChevronRightIcon className="carousel-right" onClick={handleNextImage} />
      {images.map((img, i) => (
        <div
          key={i}
          className="carousel-img"
          style={{ top: `-${carouselIndex * 100}%` }}
        >
          <img ref={carouselImg} src={img} />
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
