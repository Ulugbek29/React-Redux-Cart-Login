import React, { useEffect, useState } from 'react'
import BreadCrumbs from "../../components/BreadCrumbs"
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import { productsServices } from '../../services/products'

export default function index() {
  const [products, setProducts] = useState([])
    const items = [
        {label: "Main"},
        {label: "Sony"}
    ]

    useEffect(()=> {
      fetchAllProducts()
    },[])


    const fetchAllProducts = ()=> {
      productsServices.get()
      .then((res)=> setProducts(res))
      .catch((err)=> console.log(err))
    }

  return (
    <div className='flex flex-col gap-4 px-[10%] py-[5%]'>
    <BreadCrumbs items={items}/>
    <div className='flex flex-col text-4xl font-bold'>
        Фотокамеры
        <span className='text-[#4F9C2C]'>Canon</span>
    </div>

    <div className='w-full grid grid-cols-3 gap-4 mt-4'>
    {products.map((product,index)=> (
        <SingleProduct product={product}/>
    ))}
    </div>
    </div>
  )
}
