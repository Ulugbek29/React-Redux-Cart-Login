import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeSingleOrder } from "../../redux/Cart/cart.slice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function SingleProduct({ product }) {
  const productQuantity = useSelector((store) => store?.cart?.items);

  console.log(productQuantity);

  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addToCart(product));
  };

  const removeSingleItem = (productId) => {
    dispatch(removeSingleOrder(productId));
  };


  const productInCart = productQuantity.find(pro => pro.item.id === product.id);

  console.log(productInCart)
  return (
    <div className="relative flex flex-col gap-4 border border-[#efefef]">
      <div className="absolute top-[10px] right-[15px] flex flex-col gap-4">
        <BarChartIcon fontSize="large" className="cursor-pointer" />
        <FavoriteBorderIcon fontSize="large" className="cursor-pointer" />
      </div>
      <div className="w-full h-[150px] bg-white">
        <img
          src={`/${product?.image}.png`}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-lg">{product.title}</h2>
        <p className="text-[#75758A] text-sm">{product.brand}</p>
      </div>
      <div className="grid grid-cols-4">
        {product.creditTypes.map((type, index) => (
          <div
            key={index}
            className="p-4 flex flex-col items-center border border-[#efefef]"
          >
            {type.price}
            <span>{type.type}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 py-4 px-6">
        <button className="flex-1 px-6 py-2  font-semibold text-base shadow-lg rounded-3xl">
          More info
        </button>

        {productInCart && productInCart?.quantity > 0 ? (
          <div className="w-fit flex items-center gap-4 p-2 shadow-inner rounded-3xl">
            <span
              onClick={() => dispatch(removeSingleItem(productInCart.item.id))}
              className="w-[30px] h-[30px] flex items-center justify-center bg-gradient-to-b from-[#8EE902] to-[#4F9C2C] text-white rounded-full cursor-pointer"
            >
              <RemoveIcon />
            </span>
            <span className="text-2xl text-black font-semibold">
              {productInCart?.quantity}
            </span>
            <span
              onClick={() => addItem(productInCart.item)}
              className="w-[30px] h-[30px] flex items-center justify-center bg-gradient-to-b from-[#8EE902] to-[#4F9C2C] text-white rounded-full cursor-pointer"
            >
              <AddIcon />
            </span>
          </div>
        ) : (
          <button
            onClick={() => addItem(product)}
            className="flex-1 px-6 py-2 text-white bg-gradient-to-b from-[#8EE902] to-[#4F9C2C] font-semibold text-base text-nowrap shadow-xl rounded-3xl"
          >
            <ShoppingCartIcon />В корзину
          </button>
        )}
      </div>
    </div>
  );
}
