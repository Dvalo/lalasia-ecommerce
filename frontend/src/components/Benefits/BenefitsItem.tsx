import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Icon from "../Icon";

interface IProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitsItem = ({ icon, title, description }: IProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const cardRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const elemRef = cardRef.current!;
    const benefitItemAnimation = gsap.fromTo(
      elemRef,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "circ.out",
        scrollTrigger: {
          trigger: elemRef,
          start: "top bottom-=300",
          onEnter: () => {
            if (elemRef) {
              elemRef.classList.add("revealed");
            }
          },
        },
      }
    );

    return () => {
      benefitItemAnimation.kill();
    };
  }, []);

  return (
    <div className="c-benefits__item" ref={cardRef}>
      <div className="c-benefits__item-icon">
        <Icon width={30} height={30} icon={icon} />
      </div>
      <h3 className="c-benefits__item-title">{title}</h3>
      <p className="c-benefits__item-desc">{description}</p>
    </div>
  );
};

export default BenefitsItem;
