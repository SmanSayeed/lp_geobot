type Props = {};

const ConnectedList = (props: Props) => {
  return (
    <div>
      <ul className="connected-list">
        <li>
          <span>1</span>Insira seu número do WhatsApp (DDI+DDD+Telefone)
        </li>
        <li>
          <span>2</span>Insira seu e-mail
        </li>
        <li>
          <span>3</span>Defina uma mensagem e clique em “gerar link”
        </li>
      </ul>
    </div>
  );
};

export default ConnectedList;
