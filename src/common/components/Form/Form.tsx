import SvgIcon from "@components/SvgIcon/SvgIcon";
import { WhatsAppIcon } from "@libs/svg/WhatsappIcon";
type Props = {};

const Form = (props: Props) => {
  return (
    <>
      <div className="w-50 flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <select className="forminput h-12 w-30">
            <option>Brasil +55</option>
            <option>Brasil +55</option>
            <option>Brasil +55</option>
            <option>Brasil +55</option>
          </select>
          <input type="text" className="forminput h-12 " />
        </div>
        <div className="">
          <input type="text" className="forminput h-20 formsection w-full" />
        </div>
        <button className="w-full bg-green rounded-md row-center text-light text-font-sm-btn gap-2 py-3">
            {/* <Icon
            defaultCss={false}
            icon={WhatsAppIcon}
            iconColor="fill-light"
            css=""
            /> */}
           <SvgIcon
           name={WhatsAppIcon}
           fillColor="fill-light"
           height="20"
           width="20"
           />
            <span>

            Gerar link grátis
            </span>
        </button>
      </div>
    </>
  );
};

export default Form;
