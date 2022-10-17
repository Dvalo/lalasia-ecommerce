import type { NextPage } from "next";
import Button from "../components/Button";

const StyleGuide: NextPage = () => {
  return (
    <div className="p-styleguide">
      <div className="p-styleguide__section p-styleguide__headings">
        <div className="p-styleguide__title label-1">Headings - H1-H6</div>
        <h1>h1 - The brown fox jumps over the lazy dog</h1>
        <h2>h2 - The brown fox jumps over the lazy dog</h2>
        <h3>h3 - The brown fox jumps over the lazy dog</h3>
        <h4>h4 - The brown fox jumps over the lazy dog</h4>
        <h5>h5 - The brown fox jumps over the lazy dog</h5>
        <h6>h6 - The brown fox jumps over the lazy dog</h6>
        <h6 className="small">
          h6 (small) - The brown fox jumps over the lazy dog
        </h6>
      </div>
      <div className="p-styleguide__section p-styleguide__labels">
        <div className="p-styleguide__title label-1">Labels - L1-L3</div>
        <div className="label-1">
          label-1 - The brown fox jumps over the lazy dog
        </div>
        <div className="label-2">
          label-2 - The brown fox jumps over the lazy dog
        </div>
        <div className="label-3">
          label-3 - The brown fox jumps over the lazy dog
        </div>
      </div>
      <div className="p-styleguide__section p-styleguide__paragraphs">
        <div className="p-styleguide__title label-1">Paragraphs - P1-P4</div>
        <p className="paragraph-1">
          paragraph-1 - The brown fox jumps over the lazy dog
        </p>
        <p className="paragraph-2">
          paragraph-2 - The brown fox jumps over the lazy dog
        </p>
        <p className="paragraph-3">
          paragraph-3 - The brown fox jumps over the lazy dog
        </p>
        <p className="paragraph-4">
          paragraph-4 - The brown fox jumps over the lazy dog
        </p>
      </div>
      <div className="p-styleguide__section p-styleguide__buttons">
        <div className="p-styleguide__title label-1">Primary Buttons</div>
        <Button type="primary" text="Primary Action Button" />
        <Button type="primary" text="Primary Link Button" link="/home" />

        <div className="p-styleguide__title label-1">Secondary Buttons</div>
        <Button type="secondary" text="Secondary Action Button" />
        <Button type="secondary" text="Secondary Link Button" link="/home" />
      </div>
    </div>
  );
};

export default StyleGuide;
