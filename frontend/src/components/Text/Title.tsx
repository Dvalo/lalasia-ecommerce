import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface IProps {
  title: string;
}

const Title = ({ title }: IProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const elemRef = titleRef.current!;
    const arrowAnimation = gsap.fromTo(
      elemRef.querySelector("span"),
      {
        y: "100%",
      },
      {
        y: 0,
        delay: 0.15,
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
    <div className="c-title" ref={titleRef}>
      <span>{title}</span>
    </div>
  );
};

export default Title;
