import { Shop } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 h-48 flex flex-col items-center justify-center">
      <div className="flex text-2xl font-bold items-center cursor-pointer border p-2">
        <Shop />
        <h1>Kz-shop</h1>
      </div>

      <div className="flex text-sm text-gray-500 mt-8">
        <p className="mr-2 cursor-pointer">会社情報</p>
        <p className="mr-2 cursor-pointer">お問い合わせ</p>
        <p className="mr-2 cursor-pointer">SNS</p>
      </div>
    </footer>
  );
};

export default Footer;
