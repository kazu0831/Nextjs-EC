"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Success = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchData = async () => {
      if (sessionId) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/checkout/success`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ sessionId }),
            }
          );
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-20 rounded-md mb-20">
        <div className="font-bold text-2xl">購入が完了しました</div>
      </div>
    </div>
  );
};

export default Success;
