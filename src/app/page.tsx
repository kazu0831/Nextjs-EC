import Card from "@/components/Card";
import Image from "next/image";
import { getAllProducts } from "./lib/microcms/client";

export default async function Home() {
  const { contents } = await getAllProducts()

  return (
    <>
      <div className="w-full h-64 md:h-96 relative flex justify-center items-center">
        <Image
          className="h-full w-full object-fill"
          src={"/banner_sample.jpg"}
          width={10}
          height={10}
          alt="banner"
        />

        <h2 className="text-4xl font-bold text-white absolute">now on sale</h2>
      </div>

      <div className="h-24 flex items-center justify-center text-2xl font-bold">
        <h3>商品一覧</h3>
      </div>

      <main className="min-h-screen flex flex-wrap justify-center items-center mb-20">
        {contents.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </main>
    </>
  );
}
