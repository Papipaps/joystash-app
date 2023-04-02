import { useLayoutEffect, useRef, useState } from "react";
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

  useLayoutEffect(() => {
    const carousel = carouselImg.current;
    if (carousel) {
      let ctx = gsap.context(() => {
        gsap.fromTo(carousel, { filter: 'blur(10px)', opacity:0.7 }, { filter: 'blur(0px)',opacity:1, duration: 1 });
      });
      return () => ctx.revert();
    }
  }, [carouselIndex]);

  return (
    <div className="carousel-container">
      <ChevronLeftIcon
        className="carousel-left"
        onClick={() =>
          setCarouselIndex((prev) => (prev !== 0 ? prev - 1 : prev))
        }
      />
      <ChevronRightIcon
        className="carousel-right"
        onClick={() =>
          setCarouselIndex((prev) =>
            prev < images.length - 1 ? prev + 1 : prev
          )
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
