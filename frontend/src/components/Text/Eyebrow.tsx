import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface IProps {
  eyebrow: string;
}

const Eyebrow = ({ eyebrow }: IProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const eyebrowRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const elemRef = eyebrowRef.current!;
    const arrowAnimation = gsap.fromTo(
      elemRef.querySelector("span"),
      {
        y: "100%",
      },
      {
        y: 0,
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
    <h5 className="c-eyebrow" ref={eyebrowRef}>
      <span>{eyebrow}</span>
    </h5>
  );
};

export default Eyebrow;
