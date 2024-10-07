import { singleProduct } from "@/app/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row">
      {/* IMAGE CONTAINER */}
      <Image src={singleProduct.img} alt="" className="object-contain" fill />
      {/* TEXT CONTAINER */}
      <div className="">
        <h1></h1>
      </div>
    </div>
  );
};

export default SingleProductPage;
