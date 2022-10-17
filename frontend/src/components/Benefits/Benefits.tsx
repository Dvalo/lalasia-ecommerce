import Description from "../Text/Description";
import Eyebrow from "../Text/Eyebrow";
import Title from "../Text/Title";
import BenefitsItem from "./BenefitsItem";

const Benefits = () => {
  return (
    <article className="c-benefits">
      <div className="c-benefits__header">
        <div className="c-benefits__intro">
          <div className="c-benefits__eyebrow">
            <Eyebrow eyebrow="Benefits" />
          </div>
          <div className="c-benefits__title">
            <Title title="Benefits when using our services" />
          </div>
        </div>
        <div className="c-benefits__description">
          <Description
            description="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient."
          />
        </div>
      </div>
      <div className="c-benefits__items">
        <BenefitsItem
          icon="three-squares"
          title="Many Choices"
          description="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non."
        />
        <BenefitsItem
          icon="calendar"
          title="Fast and On Time"
          description="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non."
        />
        <BenefitsItem
          icon="money-tick"
          title="Affordable Price"
          description="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non."
        />
      </div>
    </article>
  );
};

export default Benefits;
