import { ProductTypes } from "@/types/types";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_DOMAIN || '',
    apiKey: process.env.NEXT_PUBLIC_API_KEY || ''
})

export const getAllProducts = async() =>{
    const allProducts = await client.getList<ProductTypes>({
        endpoint: 'products'
    })

    return allProducts
}

export const getDetailProduct = async(contentID: string) =>{
    const detailProduct = await client.getListDetail<ProductTypes>({
        endpoint:'products',
        contentId: ''
    })
}