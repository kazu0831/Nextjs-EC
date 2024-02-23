"use client";

import { getDetailProduct } from "@/app/lib/microcms/client";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "@/types/types";
import Link from "next/link";

const DetailProductPage = async ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const user = session?.user as User;

  const route = useRouter();

  const product = await getDetailProduct(params.id);

  const startCheckout = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: product.title,
          price: product.price,
          userId: user?.id,
          productId: product.id,
        }),
      });

      const resData = await res.json();

      if (resData) {
        route.push(resData.checkout_url);
      }
    } catch (err) {
      alert(err);
    }
  };

  const handlePurchase = () => {
    if (!user) {
      route.push("/login");
    } else {
      startCheckout();
    }
  };
  return (
    <div className="min-h-screen w-3/4 xl:w-[960px] mx-auto flex items-center justify-center">
      <div className="flex w-full xl:flex-row flex-col">
        <div className="mt-12 xl:mt-0 xl:w-1/2 xl:mr-12">
          <Image
            src={product.thumbnail ? product.thumbnail.url : `/noimage.png`}
            alt="product-img"
            className="xl:h-96 w-full object-cover"
            width={500}
            height={500}
          />
        </div>

        <div className="w-full xl:w-1/2">
          <div className="mt-12 xl:mt-0 mb-12">
            <h2 className="text-2xl">{product.title}</h2>
            <p>{product.price}円（税込）</p>

            <div className="text-sm text-gray-500 mt-8">
              {parse(product.description)}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mb-10 xl:mb-0">
            <button
              onClick={handlePurchase}
              className="w-full py-4 mb-6 rounded-md bg-red-300 hover:bg-red-200 hover:underline"
            >
              購入する
            </button>

            <Link
              href="/"
              className="w-full mb-6 text-center py-4 rounded-md bg-green-400 hover:bg-green-300 hover:underline"
            >
              商品一覧
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
