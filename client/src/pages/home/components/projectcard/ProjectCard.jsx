import React from "react";
import { img1, img2, img3, img4, bgImg } from "../../../../assets/imgs";
import "./projectCard.css";
import {Link} from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div className=" flex flex-wrap ">
      {data.map((item,i) => {
        return (
          <div className=" bg-awesome-hover max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md p-6 mb-6 hover:shadow-lg transition duration-300 ease-in-out"
          key={i}
          >
            {/* Main Image */}
            <img
              src={img2} // Replace with your image source
              alt="Main Product"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />

            {/* Sub-Images */}
            <div className="flex  mb-4 justify-center">
              <img
                src={img1} // Replace with your image source
                alt="Sub Image 1"
                className="max-w-16 py-3 border rounded-md mr-2 object-cover aspect-square"
              />
              <img
                src={img3} // Replace with your image source
                alt="Sub Image 2"
                className="w-1/2 h-24 border py-2 object-cover rounded-md ml-2 aspect-square"
              />
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4">
              A brief description of the product. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            {/* Link */}
            <Link href="#" className="text-green-500 hover:underline mb-4 block">
              Learn more
            </Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <Link> </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
