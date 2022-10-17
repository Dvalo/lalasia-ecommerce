import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

interface IProps {
  image: string;
  alt: string;
}

const ScrollableImage = ({ image, alt }: IProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const imageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const elemRef = imageRef.current!;
    let imageScrollAnimation: GSAPAnimation;

    const imageRevealAnimation = gsap.fromTo(
      elemRef.querySelector(".c-scroll-image__inner"),
      {
        x: "-300%",
      },
      {
        x: 0,
        ease: "Power4.in",
        duration: 1.2,
        scrollTrigger: {
          trigger: elemRef.querySelector(".c-scroll-image__inner"),
          start: "top bottom",
        },

        onComplete: () => {
          imageScrollAnimation = gsap.to(
            elemRef.querySelector(".c-scroll-image__inner"),
            {
              scale: 1.05,
              scrollTrigger: {
                trigger: elemRef.querySelector(".c-scroll-image__inner"),
                start: "top +=200",
                end: "bottom",
                scrub: true,
              },
            }
          );
        },
      }
    );

    return () => {
      if (imageScrollAnimation) {
        imageScrollAnimation.kill();
      }
      imageRevealAnimation.kill();
    };
  }, []);

  return (
    <figure className="c-scroll-image" ref={imageRef}>
      <div className="c-scroll-image__inner">
        <Image src={image} layout="fill" alt={alt} objectFit="cover" />
      </div>
    </figure>
  );
};

export default ScrollableImage;
