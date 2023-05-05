import Image from "next/image";
import Link from "next/link";
import { logoName } from "@config/constants";
const Brand = () => {
  return (
    <div className="max-w-[120px] md:max-w-[140px]">
      <Link href={"/"}>
        <Image
          src={logoName}
          alt="logo"
          width={107}
          height={28}
          className="cursor-pointer "
        />
      </Link>
    </div>
  );
};

export default Brand;
