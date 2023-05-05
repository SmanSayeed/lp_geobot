import Brand from "@components/Brand/Brand";

const Header = () => {
  return (
    <div className="shadow-[0px_4px_8px_rgba(1,6,49,0.04)]">
      <div className="container flex justify-between py-8">
        <Brand />
        {/* <Button>Criar Conta</Button> */}
        <button className="bg-gradiant flex row-center text-light text-font-sm-btn w-[139px] rounded-md">
          Criar Conta
        </button>
      </div>
    </div>
  );
};

export default Header;
