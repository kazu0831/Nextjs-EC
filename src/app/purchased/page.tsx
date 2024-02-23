import { getServerSession } from "next-auth";
import React from "react";
import { nextAuthOptions } from "../lib/next-auth/options";
import { ProductTypes, Purchase, User } from "@/types/types";
import { getDetailProduct } from "../lib/microcms/client";

const History = async () => {
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user as User;

  let purchaseHistory: ProductTypes[] = [];

  if (user) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/history/${user.id}`,
      { cache: "no-store" }
    );

    const data = await res.json();

    purchaseHistory = await Promise.all(
      data.map(async (purchase: Purchase) => {
        return await getDetailProduct(purchase.productId);
      })
    );
  }

  return (
    <>
      {user ? (
        <div className="container p-4 mx-auto min-h-screen flex flex-col">
          <div className="flex items-center justify-center mt-4">
            <span className="font-bold">{user.name}の購入履歴</span>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center">
            {purchaseHistory.map((item) => (
              <div key={item.id} className="py-4 w-96 flex items-center">
                <p className="mr-3">2024年2月22日</p>
                <h2 className="mr-3">{item.title}</h2>
                <p>{item.price}円</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container p-4 mx-auto min-h-screen flex flex-col">
          <div className="flex items-center justify-center mt-4">
            <span className="font-bold">ログインしていません</span>
          </div>
        </div>
      )}
    </>
  );
};

export default History;
