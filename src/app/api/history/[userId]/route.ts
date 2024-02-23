import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;

  try {
    const history = await prisma.purchase.findMany({
      where: { userId: userId },
    });

    return NextResponse.json(history);
  } catch (err) {
    return NextResponse.json(err);
  }
}
