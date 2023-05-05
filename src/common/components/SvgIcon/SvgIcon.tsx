type Props = {
  name: any;
  fillColor: string | "none";
  css?: string;
  height?: string;
  width?: string;
};

const SvgIcon = ({ name, fillColor, css, height, width }: Props) => {
  const defaultHeight = "21";
  const defaultWidth = "21";
  const h = height || defaultHeight;
  const w = width || defaultWidth;
  return (
    <>
      <svg
        className={`${fillColor}`}
        width={w}
        height={h}
        viewBox={`0 0 21 21`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {name}
      </svg>
    </>
  );
};

export default SvgIcon;
