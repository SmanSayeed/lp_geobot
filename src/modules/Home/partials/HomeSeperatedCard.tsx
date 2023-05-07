import Card from "@components/Card/Card";
import SmallCard from "@components/SmallCard/SmallCard";
import Text from "@components/Text/Text";
import { brands } from "@config/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const HomeSeperatedCard = (props: Props) => {
  return (
    <>
      <div className="mt-[10%]">
        <div className="py-10 flex flex-col items-center justify-start">
          <Text
            text="As principais ferramentas de marketing para WhatsApp"
            css="small-gradiant-title lg:w-[70%]  lg:mb-5"
          />
          {/* <div className="bg-red-500 grid grid-flow-row gap-3 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center"> */}
          <div className=" flex flex-col lg:gap-7 lg:flex-row lg:items-center lg:justify-between lg:w-[80%]">
            <SmallCard css="small-card " />
            <SmallCard css="small-card " />
            <Card css="bg-gradiant small-card ">
              <Text
                text="Sistema de atendimento WhatsApp"
                css="text-font-md text-light"
              />
              <Text
                text="Dispare mensagens integradas para seus clientes, do Hotmart, Monetizze entre outras plataformas."
                css="text-font-sm text-light"
              />
              <div className="grid grid-cols-2 gap-4 justify-between">
                <div className="">
                  <Image
                    src={brands.brand1}
                    height={35}
                    width="112"
                    alt="brand logo"
                  />
                </div>
                <div className="">
                  <Image
                    src={brands.brand2}
                    height={35}
                    width="112"
                    alt="brand logo"
                  />
                </div>
                <div className="">
                  <Image
                    src={brands.brand3}
                    height={35}
                    width="112"
                    alt="brand logo"
                  />
                </div>
                <div className="">
                  <Image
                    src={brands.brand4}
                    height={35}
                    width="112"
                    alt="brand logo"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeSeperatedCard;
