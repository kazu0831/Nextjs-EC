export type ProductTypes = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: { url: string };
  category: string;
  createdAt: string;
  updatedAt: string;
};

export type Purchase = {
  id: string;
  userId: string;
  productId: string;
  createdAt: string;
};

export type User = {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};
