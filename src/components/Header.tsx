import React from "react";
import ShopIcon from "@mui/icons-material/Shop";
import { Search, ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { User } from "@/types/types";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import Logout from "./Logout";

const Header = async () => {
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user as User;

  return (
    <header className="p-4 px-6 border-b-2">
      <nav className="flex justify-between items-center">
        <Link
          href="/"
          className="flex text-2xl font-bold items-center cursor-pointer border p-2"
        >
          <ShopIcon />
          <h1>Kz-shop</h1>
        </Link>

        <div className="flex items-center">
          {user ? (
            <Logout />
          ) : (
            <Link href="/login">
              <button>ログイン</button>
            </Link>
          )}

          <Link href="/purchased">
            <Image
              className="rounded-full border-2 w-10 h-10 ml-4"
              width={40}
              height={40}
              src={user?.image || "/noimage.png"}
              alt="img"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
