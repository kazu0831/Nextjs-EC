import { Label } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col items-center border rounded-md m-4 w-96">
      <Link
        href={`/`}
        className="cursor-pointer shadow-lg duration-300 hover:translate-y-1 hover:shadow-none"
      >
        <div className="relative w-96 h-64">
          <Image
            src={"/vercel.svg"}
            width={100}
            height={100}
            alt="thumbnail"
            className="rounded-t-md w-full h-full"
          />
        </div>
        <div className="px-4 py-4 bg-slate-100 rounded-b-md h-full">
          <h2 className="text-xl font-semibold">タイトル</h2>
          <div className="mt-2">
            <span className="inline-block rounded-md border pl-1 pr-2 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">
              <Label />
              タグ名
            </span>
          </div>
          <p className="mt-2 text-lg text-slate-600">
            商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明
          </p>
          <div className="flex justify-between items-center mt-3">
            <p className="text-md text-slate-700 text-right">0000円</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
