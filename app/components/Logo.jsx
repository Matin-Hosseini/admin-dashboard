import logo from "@/public/images/logo/logo-iranoriginal-gray.webp";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} width={110} />
    </Link>
  );
};

export default Logo;
