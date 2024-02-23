"use client";

import { ProductTypes } from "@/types/types";
import { Label } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { omitText } from "@/utils/omission";

type CardProps = {
  item: ProductTypes;
};

const Card = ({ item }: CardProps) => {
  return (
    <>
      <div className="flex flex-col items-center rounded-md m-4 w-96">
        <Link
          href={`/product/${item.id}`}
          className="cursor-pointer shadow-lg duration-300 hover:translate-y-1 hover:shadow-none"
        >
          <div className="relative w-96 h-64">
            <Image
              src={item.thumbnail ? item.thumbnail.url : `/noimage.png`}
              width={100}
              height={100}
              alt="thumbnail"
              className="object-cover rounded-t-md w-full h-full"
            />
          </div>
          <div className="px-4 py-4 bg-slate-100 rounded-b-md h-full">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <div className="mt-2">
              <span className="inline-block rounded-md border pl-1 pr-2 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">
                <Label />
                {item.category}
              </span>
            </div>
            <div
              className="mt-2 text-lg text-slate-600"
              dangerouslySetInnerHTML={{
                __html: omitText(item.description, 15),
              }}
            />
            <div className="flex justify-between items-center mt-3">
              <p className="text-md text-slate-700 text-right">
                {item.price}円
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
