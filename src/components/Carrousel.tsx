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

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((i) => {
        if (i >= images.length - 1) {
          return 0;
        } else {
          return i + 1;
        }
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const carousel = carouselImg.current;
    if (carousel) {
      let ctx = gsap.context(() => {
        gsap.fromTo(
          carousel,
          { filter: "blur(10px)", opacity: 0.7 },
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
        onClick={() =>
          setCarouselIndex((prev) =>
            prev !== 0 ? prev - 1 : images.length - 1
          )
        }
      />
      <ChevronRightIcon
        className="carousel-right"
        onClick={() =>
          setCarouselIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
        }
      />
      <img
        ref={carouselImg}
        src={images[carouselIndex]}
        className="carousel-img"
      />
    </div>
  );
};

export default Carrousel;
