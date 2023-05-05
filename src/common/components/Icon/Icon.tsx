import SvgIcon from "@components/SvgIcon/SvgIcon";

type Props = {
  icon: any;
  css?: string;
  round?: boolean;
  iconColor: string;
  defaultCss?: boolean;
};

const Icon = ({ icon, css, round, iconColor, defaultCss = true }: Props) => {
  const defaultStyle = "inline-flex items-center justify-center w-10 h-10 mr-2";
  return (
    <div
      className={`${defaultCss && defaultStyle} ${css} ${
        round ? "rounded-full" : "rounded-lg"
      }`}
    >
      <SvgIcon
        name={icon}
        // fillColor={`fill-#${iconColor}`}
        fillColor={iconColor}
      />
    </div>
  );
};

export default Icon;
