import Card from "@components/Card/Card";
import Icon from "@components/Icon/Icon";
import List from "@components/List/List";
import Text from "@components/Text";
import { WhatsAppIcon } from "@libs/svg/WhatsappIcon";

type Props = {
  css?:string
};
const listItemCard1 = [
  { text: "Vários atendentes" },
  { text: "Único número WhatsApp" },
  { text: "URA atendimento" },
  { text: "Vários departamentos" },
];

const SmallCard = ({css}: Props) => {
  return (
    <>
      <Card css={`card-light  ${css} `}>
        <Icon
          icon={WhatsAppIcon}
          iconColor="fill-light"
          css="bg-green"
          round={false}
        />
        <Text
          text="Sistema de atendimento WhatsApp"
          css="text-font-md text-primary_black"
        />
        <List listItem={listItemCard1} />
        <button className="bg-gradiant-blue flex row-center py-2 w-full mt-8 rounded-[12px] text-light text-font-sm-btn">
          Acessar agora
        </button>
      </Card>
    </>
  );
};

export default SmallCard;
