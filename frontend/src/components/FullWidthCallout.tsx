import Button from "./Button";
import Title from "./Text/Title";

interface IProps {
  title: string;
  ctaText: string;
  ctaUrl: string;
}

const FullWidthCallout = ({ title, ctaText, ctaUrl }: IProps) => {
  return (
    <article className="b-full-width-callout">
      <Title title={title} />
      <Button type="primary" text={ctaText} link={ctaUrl} icon={true} />
    </article>
  );
};

export default FullWidthCallout;
