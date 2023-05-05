import Card from "@components/Card/Card";
import ConnectedList from "@components/ConnectedList/ConnectedList";
import Content from "@components/Content/Content";
import Form from "@components/Form/Form";
import Icon from "@components/Icon/Icon";
import SmallCard from "@components/SmallCard/SmallCard";
import Text from "@components/Text/Text";
import { brands, left_img, right_img } from "@config/constants";
import { DownloadIcon } from "@libs/svg/DownloadIcon";
import { LinkIcon } from "@libs/svg/LinkIcon";
import { SortDescendingIcon } from "@libs/svg/SortDescendingIcon";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container">
      {/* hero */}
      <div className="">
        <div className="py-20 col-center ">
          <Text
            text="Gerador de link para WhatsApp"
            css="title-gradiant text-font-xl"
          />
          <Text
            text="O melhor gerador de link WhatsApp encurtado, gere links para WhatsApp curto grátis."
            css=" text-font-sm text-neutro_dark_02"
          />

          <Form />
        </div>
      </div>
      {/* hero  end */}

      {/* jointed gradiant cards  */}
      <div className="">
        <div className="py-20 col-center">
          <Card css="px-8 py-8 bg-gradiant row-center gap-5">
            <Card css="">
              <Icon
                icon={LinkIcon}
                iconColor="fill-primary_blue"
                round={true}
                css="joint-card-icon"
              />
              <Text
                text="Gerador de link WhatsApp curto"
                css="joint-card-title"
              />
              <Text
                text="Gere link de WhatsApp curto, a visualização encurtada melhora a experiência do usuário permitindo que mais pessoas cliquem no seu link."
                css="joint-card-text"
              />
            </Card>
            <Card css="">
              <Icon
                icon={SortDescendingIcon}
                iconColor="fill-primary_blue"
                round={true}
                css="joint-card-icon"
              />
              <Text
                text="Encurtador de link whatsapp grátis"
                css="joint-card-title"
              />
              <Text
                text="Encurte seus link do WhatsApp totalmente grátis sem custos, além de gerar o link já encurtado você pode salvar na plataforma Geobot."
                css="joint-card-text"
              />
            </Card>
            <Card css="">
              <Icon
                icon={DownloadIcon}
                iconColor="fill-primary_blue"
                round={true}
                css="joint-card-icon"
              />
              <Text
                text="Salve seus links do WhatsApp"
                css="joint-card-title"
              />
              <Text
                text="Essa é mais uma das vantagens em utilizar o nosso gerador de links para o WhatsApp, você pode salvar e ter acesso ao relatórios de cliques."
                css="joint-card-text"
              />
            </Card>
          </Card>
        </div>
      </div>
      {/* jointed gradiant cards end */}
      {/* connected list  */}
      <div className="">
        <div className="py-10 col-center ">
          <Text
            text="Como gerar links WhatsApp em 3 passos"
            css="title-gradiant w-2/5 text-font-lg"
          />
          <Text
            text="Aprenda como gerar o seu link de WhatsApp em apenas 3 passos simples"
            css=" text-font-sm text-neutro_dark_02"
          />
        </div>
      </div>
      <div className="mx-auto w-1/2">
        <ConnectedList />
      </div>
      {/* connected list end  */}
      {/* separated cards  */}
      <div className="">
        <div className="py-10 col-center">
          <Text
            text="As principais ferramentas de marketing para WhatsApp"
            css="title-gradiant w-2/5 text-font-lg"
          />
          <div className="flex w-full row-center gap-5 ">
            <SmallCard />
            <SmallCard />
            <Card css="bg-gradiant  small-card">
              <Text
                text="Sistema de atendimento WhatsApp"
                css="text-font-md text-light"
              />
              <Text
                text="Dispare mensagens integradas para seus clientes, do Hotmart, Monetizze entre outras plataformas."
                css="text-font-sm text-light"
              />
              <div className="mt-5 grid grid-cols-2 gap-4 justify-between">
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
      {/* separated cards end */}

      {/* left image section  */}
      <div
        className={`left-image-section bg-blue-200 py-10 px-8 flex row-center rounded-border gap-5 bg-[url('/img/bg/bg.png')]`}
      >
        <div className="left-part">
          <Image src={right_img} height="362" width="419" alt="brand logo" />
        </div>
        <div className="right-part ">
          <Card css="w-[491px]">
            <Content />
            <button className="bg-gradiant flex row-center py-2 w-1/2 mt-8 rounded-[12px] text-light text-font-sm-btn">
              Criar conta grátis
            </button>
          </Card>
        </div>
      </div>
      {/* left image section end */}

      {/* RIGHT image section  */}
      <div className="left-image-section my-10 py-10 px-8 flex justify-center  rounded-border gap-10">
        <div className="left-part ">
          <Card css="w-[450px]">
            <Content />
            <Content />
          </Card>
        </div>
        <div className="right-part">
          <Image src={left_img} height="362" width="419" alt="brand logo" />
        </div>
      </div>
      {/* right image section end */}
    </div>
  );
};

export default Hero;
