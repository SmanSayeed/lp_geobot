import Button from "@components/Button/Button";
import Icon from "@components/Icon/Icon";
import LinkCopy from "@components/LinkCopy/LinkCopy";
import Text from "@components/Text/Text";
import { check_circle, cross_icon } from "@config/constants";
import { CrossIcon } from "@libs/svg/CrossIcon";
import { LinkedinIcon } from "@libs/svg/LinkedinIcon";
import { TwitterIcon } from "@libs/svg/TwitterIcon";
import { WhatsAppIcon } from "@libs/svg/WhatsappIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  onClose?: () => void;
  visible?: any;
};

const Popup = ({ onClose, visible }: Props) => {
  if (!visible) return null;

  const disableScroll = () => {
    if (visible) document.body.style.overflow = "hidden";
  };
  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  disableScroll();

  const closePopup = () => {
    enableScroll();
    onClose && onClose();
  };

  const handleOnBackDropClick = (e: any) => {
    if (e.target.id === "backdrop") closePopup();
  };

  return (
    <div className="modal" id="backdrop" onClick={handleOnBackDropClick}>
      <div className="popup bg-light">
        <button className="cross" onClick={() => closePopup()}>
          <Image src={cross_icon} height={10} width={10} alt="cross" />
        </button>
        <div className="w-full flex col-center">
          <Image src={check_circle} height={40} width={40} alt="cross" />
          <Text
            text="Link gerado com sucesso!"
            css="text-font-md  text-primary_black"
          />
        </div>
        <div className="links">
          <LinkCopy link="https://api.whatsapp.com/send?phone=5511900000000&text=" />
          <LinkCopy link="encurtador.io/Y6gh3K" />
        </div>
        <div className="flex justify-between">
          <Text
            text="Compartilhe nas redes:"
            css="text-font-md text-primary_black"
          />
          <div className="flex row-center gap-2">
            <Icon
              icon={LinkedinIcon}
              iconColor="fill-primary_blue"
              css="border-2 border-primary_blue"
              round={false}
            />
            <Icon
              icon={WhatsAppIcon}
              iconColor="fill-light"
              css="bg-green"
              round={false}
            />
            <Icon
              icon={TwitterIcon}
              iconColor="fill-light"
              css="bg-primary_blue"
              round={false}
            />
          </div>
        </div>

        <div className="my-5">
          <Button className="w-full bg-gradiant text-light rounded-border rounded-md hover:bg-light  hover:border-secondry_purple hover:text-light ">
            Salvar meu link WhatsApp
          </Button>
        </div>

        <div className="my-5">
          <Button
            className="w-full bg-light 
        text-font-md
        text-secondry_purple border-2 border-secondry_purple  rounded-border rounded-md hover:bg-gradiant hover:border-light hover:text-light "
          >
            Criar novo link WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
