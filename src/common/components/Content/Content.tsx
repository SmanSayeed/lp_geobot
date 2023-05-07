import Text from "@components/Text";

type Props = {
  title:string;
  text:any;
};

const Content = ({title,text}: Props) => {
  return (
    <>
      <Text
        text={title}
        css="small-gradiant-title font-700 text-left mb-2"
      />

      <Text
        text={text}
        css="text-font-sm text-neutro_dark_02"
      />
    </>
  );
};

export default Content;
