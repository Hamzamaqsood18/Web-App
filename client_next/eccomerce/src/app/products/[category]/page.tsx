// "use client";
import {
  useGetProductDetailsByIdQuery,
  useGetProductsQuery,
} from "@/app/reduxToolkit/services/products";
import ProductCard from "@/components/public/server/ProductCard";

import { Product } from "@/types/Product";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
import Products from "../Products";
import ProductFilterPanel from "../ProductFilterPanel";
interface Props {
  params: { category: string };
}
const page = ({ params }: Props) => {
  const { category } = params;
  // console.log(category);

  // const { isLoading, isError, data } = useGetProductsQuery();

  // const Products = dynamic(() => import("@/components/server/Products"), {
  //   ssr: true,
  // });
  console.log(category);
  return (
    <Products productsCategory={category}>
      <ProductFilterPanel />
    </Products>
  );
};

export default page;
