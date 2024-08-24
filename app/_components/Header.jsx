import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function Header() {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <img src="./finanse trk logo.jpg" alt="logo" width={190} height={100} />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
