'use client'

import React from "react";
import ShopIcon from "@mui/icons-material/Shop";
import { ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession()
  const user = session?.user
  return (
    <header className="p-4 px-6 border-b-2">
      <nav className="flex justify-between items-center">
        <Link href='/' className="flex text-2xl font-bold items-center cursor-pointer border p-2">
          <ShopIcon />
          <h1>Kz-shop</h1>
        </Link>

        <div className="flex items-center">
          <span className="font-bold">ログイン</span>
          <ShoppingCart className="ml-4" />

          <Image
            className="rounded-full border-2 w-10 h-10 ml-4"
            width={40}
            height={40}
            src={user?.image || "/next.svg"}
            alt="img"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
