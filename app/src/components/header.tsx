import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-3">
      <Image
        src="/logo.png"
        alt="Deli-Food"
        height={25}
        width={80}
        className="mb-3"
      />
      <Button
        size="icon"
        variant="outline"
        className="mt-3 border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
