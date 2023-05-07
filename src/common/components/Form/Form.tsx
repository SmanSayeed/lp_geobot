import SvgIcon from "@components/SvgIcon/SvgIcon";
import { WhatsAppIcon } from "@libs/svg/WhatsappIcon";
type Props = {};

const Form = (props: Props) => {
  return (
    <>
      <div className="w-[82%] lg:w-[38%] flex flex-col gap-5 mt-5">
        <div className="flex flex-col lg:flex-row gap-5">
          <select className="forminput h-12 w-full lg:w-1/3 text-neutro_dark_04  ">
            <option>Brasil +55</option>
            <option>Brasil +55</option>
            <option>Brasil +55</option>
            <option>Brasil +55</option>
          </select>
          <input type="text" className="forminput h-12 w-full lg:w-2/3" placeholder="(00) 90090-0009"  />
        </div>
        <div className="">
          {/* <input type="text" className="forminput h-20 formsection w-full flex justify-start items-start bg-red-500 leading-2" placeholder="Escreva uma mensagem (opcional)" /> */}
          <textarea className="forminput h-20 formsection w-full flex justify-start items-start leading-2 resize-none" placeholder="Escreva uma mensagem (opcional)">

          </textarea>
        </div>
        <button className="w-full bg-green rounded-md row-center text-light text-font-sm-btn gap-2 py-2">
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
