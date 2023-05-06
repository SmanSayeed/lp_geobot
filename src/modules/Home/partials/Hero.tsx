import Card from "@components/Card/Card";
import ConnectedList from "@components/ConnectedList/ConnectedList";
import Content from "@components/Content/Content";
import Form from "@components/Form/Form";
import HeroTop from "@components/Hero/HeroTop";
import HeroConnectedList from "@components/Hero/HeroConnectedList";
import HeroSecondCard from "@components/Hero/HeroSecondCard";
import HeroSeperatedCard from "@components/Hero/HeroSeperatedCard";
import Icon from "@components/Icon/Icon";
import Popup from "@components/Popup/Popup";
import SmallCard from "@components/SmallCard/SmallCard";
import Text from "@components/Text/Text";
import {
  brands,
  left_img,
  message_left,
  message_right,
  right_img,
} from "@config/constants";
import { DownloadIcon } from "@libs/svg/DownloadIcon";
import { LinkIcon } from "@libs/svg/LinkIcon";
import { SortDescendingIcon } from "@libs/svg/SortDescendingIcon";
import Image from "next/image";
import HeroLeftImage from "@components/Hero/HeroLeftImage";
import HeroRightImage from "@components/Hero/HeroRightImage";
import HeroLastSection from "@components/Hero/HeroLastSection";

const Hero = () => {
  return (
    <div className="">
      <HeroTop />
      <HeroSecondCard />
      <HeroConnectedList />
      <HeroSeperatedCard />
      <HeroLeftImage />
      <HeroRightImage />
      <HeroLastSection />
    </div>
  );
};

export default Hero;
