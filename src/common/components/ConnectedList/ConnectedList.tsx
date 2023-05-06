import Text from "@components/Text/Text";

type Props = {};

const ConnectedList = (props: Props) => {
  return (
    <div>
      <ul className="connected-list">
        <li>
          <div className="serial">1</div>
          <Text
          text="Insira seu número do WhatsApp (DDI+DDD+Telefone)"
          css="w-2/3"
          />
         
        </li>
        <li>
          <div className="serial">2</div>
           <Text
          text="Insira seu e-mail"
          css="w-2/3"
          />
   
        </li>
        <li>
          <div className="serial">3</div>
           <Text
          text="Defina uma mensagem e clique em “gerar link”"
          css="w-2/3"
          />
        
        </li>
      </ul>
    </div>
  );
};

export default ConnectedList;
