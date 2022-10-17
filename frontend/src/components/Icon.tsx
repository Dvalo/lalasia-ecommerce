interface IProps {
  width: number;
  height: number;
  icon: string;
}

const Icon = ({ width, height, icon }: IProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <use xlinkHref={`/svg/sprite.symbol.svg#${icon}`} />
    </svg>
  );
};

export default Icon;
