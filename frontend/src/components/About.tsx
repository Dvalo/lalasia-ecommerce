import Button from "./Button";
import Eyebrow from "./Text/Eyebrow";
import ScrollableImage from "./ScrollableImage";
import Title from "./Text/Title";
import Description from "./Text/Description";

const About = () => {
  return (
    <article className="c-about-us">
      <div className="c-about-us__inner">
        <div className="c-about-us__info">
          <div className="c-about-us__info-eyebrow">
            <Eyebrow eyebrow="Our Product" />
          </div>
          <div className="c-about-us__info-title">
            <Title title="Crafted by talanted and high quality material" />
          </div>
          <div className="c-about-us__info-desc">
            <Description
              description="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
            morbi fermentum, vivamus et accumsan dui tincidunt pulvinar"
            />
          </div>
          <div className="c-about-us__info-cta">
            <Button type="primary" text="Learn More" />
          </div>
          <div className="c-about-us__info-image">
            <ScrollableImage image="/assets/woodwork.png" alt="Woodwork" />
          </div>
        </div>
        <div className="c-about-us__stats">
          <div className="c-about-us__stats-inner">
            <div className="c-about-us__stats-box">
              <Title title="20+" />
              <Description description="Years Experience" />
            </div>
            <div className="c-about-us__stats-box">
              <Title title="483" />
              <Description description="Happy Clients" />
            </div>
            <div className="c-about-us__stats-box">
              <Title title="150+" />
              <Description description="Projects Finished" />
            </div>
          </div>
          <div className="c-about-us__stats-image">
            <ScrollableImage image="/assets/furniture.png" alt="Furniture" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
