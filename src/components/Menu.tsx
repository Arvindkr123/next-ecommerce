"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="">
      <Image
        onClick={() => setOpen((prev) => !prev)}
        src="/menu.png"
        width={28}
        alt="logo menu"
        height={28}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute top-20 bg-black text-white left-0 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};
export default Menu;
