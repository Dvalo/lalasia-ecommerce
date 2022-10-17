import { useEffect, useRef } from "react";
import Icon from "./Icon";
import ScrollableImage from "./ScrollableImage";
import Description from "./Text/Description";
import Title from "./Text/Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface IProps {
  title: string;
  description: string;
  graphics?: boolean;
  image: string;
}

const Hero = ({ title, description, graphics = false, image }: IProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const arrowRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const elemRef = arrowRef.current!;
    const arrowAnimation = gsap.fromTo(
      elemRef.querySelector("svg"),
      {
        strokeDasharray: 200,
        strokeDashoffset: 200,
      },
      {
        strokeDashoffset: 0,
        delay: 1,
        scrollTrigger: {
          trigger: elemRef.querySelector("svg"),
          start: "top bottom",
        },
      }
    );

    return () => {
      arrowAnimation.kill();
    };
  }, []);

  return (
    <article
      className={`b-hero b-hero--${graphics ? "graphics" : "no-graphics"}`}
    >
      <div className="b-hero__content">
        <div className="b-hero__title">
          <Title title={title} />
        </div>
        <div className="b-hero__desc">
          <Description description={description} />
        </div>
        {graphics ? (
          <div className="b-hero__arrow" ref={arrowRef}>
            <Icon width={250} height={250} icon="swirl-arrow" />
          </div>
        ) : null}
        {graphics ? (
          <div className="b-hero__stars">
            <Icon width={51} height={51} icon="flying-star" />
          </div>
        ) : null}
      </div>
      <div className="b-hero__image">
        <ScrollableImage image={image} alt="Hero" />
      </div>
    </article>
  );
};

export default Hero;
