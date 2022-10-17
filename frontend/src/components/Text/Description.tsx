import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface IProps {
  description: string;
}

const Description = ({ description }: IProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const descRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const elemRef = descRef.current!;
    const arrowAnimation = gsap.fromTo(
      elemRef.querySelector("span"),
      {
        y: "100%",
      },
      {
        y: 0,
        delay: 0.3,
        ease: "circ.out",
        scrollTrigger: {
          trigger: elemRef,
          start: "top bottom-=300",
        },
      }
    );

    return () => {
      arrowAnimation.kill();
    };
  }, []);

  return (
    <p className="c-description" ref={descRef}>
      <span>{description}</span>
    </p>
  );
};

export default Description;
