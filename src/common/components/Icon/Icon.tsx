import SvgIcon from "@components/SvgIcon/SvgIcon";
import { FC } from "react";
type Props = {
  icon: any;
  css?: string;
  round?: boolean;
  iconColor: string;
  defaultCss?: boolean;
  onClick?: () => any;
};

const Icon:FC<Props> = ({onClick = () => {}, icon, css, round, iconColor, defaultCss = true }: Props) => {
  const defaultStyle = "inline-flex items-center justify-center w-10 h-10 mr-2";
  return (
    <div
      className={`${defaultCss && defaultStyle} ${css} ${
        round ? "rounded-full" : "rounded-lg"
      }`}
      onClick={onClick}
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
