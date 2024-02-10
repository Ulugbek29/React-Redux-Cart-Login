import React, { useEffect, useState } from "react";
import headerImg from "/header.png";
import {productsServices} from "../../services/products"
import {newsServices} from "../../services/news"

//Icons
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [news, setNews] = useState([])

  useEffect(()=> {
    fetchAllProducts()
    fetchAllNews()
  },[])

  const fetchAllProducts = ()=> {
    productsServices.get(3)
    .then(res => setProducts(res))
    .catch(error=> console.log(error))
  }

  const fetchAllNews = ()=> {
    newsServices.get(3)
    .then(res => setNews(res))
    .catch(error=> console.log(error))
  }

  return (
    <div className="w-full">
      <div className="relative w-full h-[600px]">
        <img src={headerImg} className="w-full h-full object-cover" />
        <div className="absolute bottom-[100px] left-[100px] text-[30px] font-semibold flex flex-col gap-1">
          <div className="py-2 px-4 w-fit bg-white shadow-lg">
            <span className="text-[#8EE901]">Аренда</span>Фото
          </div>
          <div className="py-2 px-4 w-fit bg-white shadow-lg">И видео</div>
          <div className="py-2 px-4 w-fit bg-white shadow-lg">оборудования</div>
        </div>
      </div>
      
      <div className="bg-[#F5F5F5] flex justify-between gap-4 py-6 px-[10%]">
        <div className="flex items-center gap-4">
          <DescriptionOutlinedIcon fontSize="large"/>
          Самый большой выбор техники
        </div>
        <div className="flex items-center gap-4">
          <AccessTimeOutlinedIcon fontSize="large"/>
          Быстрое оформление заказа
        </div>
        <div className="flex items-center gap-4">
          <FmdGoodOutlinedIcon fontSize="large"/>
          Можно забрать заказ в пункте выдачи
        </div>
        <div className="flex items-center gap-4">
          <Inventory2OutlinedIcon fontSize="large"/>
          Доставка в любую точку Москвы
        </div>
        <div className="flex items-center gap-4">
          <CreditCardOutlinedIcon fontSize="large"/>
          Оплата картой и наличными
        </div>
      </div>

      <div className="w-full mt-8 px-[10%]">
            <h2 className="text-xl font-semibold text-center mb-4">Популярные товары</h2>
            <div className="grid grid-cols-3 gap-4">
            {products.map((product)=> (
                <SingleProduct product={product}/>
            ))}
            </div>
      </div>

      <div className="w-full mt-8 px-[10%]">
            <h2 className="text-xl font-semibold text-center mb-4">Новости компании</h2>
            <div className="grid grid-cols-3 gap-4">
            {news.map((newsItem, index) => (
                <div key={index} className="flex flex-col border border-[#efefef]">
                    <div className="w-full h-[250px]">
                        <img src={`/${newsItem.image}.png`} className="w-full h-full"/>
                    </div>
                    <div className="p-4">
                        <span className="text-[#75758A]">{newsItem.date}</span>
                        <h2 className="text-lg font-semibold">{newsItem.title}</h2>
                        <p className="text-[#75758A]">{newsItem.text}</p>
                    </div>
                </div>
            ))}
            </div>
      </div>
    </div>
  );
}
