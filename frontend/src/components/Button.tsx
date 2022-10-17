import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Icon from "./Icon";

interface IProps {
  type: "primary" | "secondary";
  text: string;
  link?: string;
  icon?: boolean;
}

const Button = ({ type, text, link, icon = false }: IProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const linkElemRef = linkRef.current!;
    const buttonElemRef = buttonRef.current!;

    const buttonAnimation = gsap.fromTo(
      linkElemRef ? linkElemRef : buttonElemRef,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "circ.out",
        scrollTrigger: {
          trigger: linkElemRef ? linkElemRef : buttonElemRef,
          start: "top bottom-=300",
        },
      }
    );

    return () => {
      buttonAnimation.kill();
    };
  }, []);

  if (link) {
    return (
      <a href={link} className={`button button--${type}`} ref={linkRef}>
        <span className="button__text-wrapper">
          <span className="button__text" data-text={text}>
            {text}
          </span>
          <span className="button__icon">
            {icon ? <Icon width={27} height={13} icon="arrow" /> : null}
          </span>
        </span>
      </a>
    );
  }

  return (
    <button className={`button button--${type}`} ref={buttonRef}>
      <span className="button__text-wrapper">
        <span className="button__text" data-text={text}>
          {text}
        </span>
        <span className="button__icon">
          {icon ? <Icon width={27} height={13} icon="arrow" /> : null}
        </span>
      </span>
    </button>
  );
};

export default Button;
