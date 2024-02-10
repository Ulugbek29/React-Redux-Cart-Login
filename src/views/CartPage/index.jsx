import Breadcrumbs from "../../components/BreadCrumbs"
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, orderTotalCost,removeSingleOrder, removeAllOrders, removeOrder } from "../../redux/Cart/cart.slice";
import TotalCostModal from "./TotalCostModal"
//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch()
  const orders = useSelector((store)=> store?.cart?.items)
  const authCheck = useSelector((store)=> store?.auth?.isAuth)
  const totalCost = useSelector((store)=> store?.cart?.totalCost)

  //Modal
  const handleOpen = () => {
    if(authCheck) {
      setOpenModal(true)
    }else {
      toast.error('PLease LogIn to order products', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
  const handleClose = () => {
    setOpenModal(false)
    removeAllItems()
  }

  //Redux
  useEffect(() => {
    dispatch(orderTotalCost());
  }, [dispatch]);

  const addItem = (data) => {
    dispatch(addToCart(data));
    dispatch(orderTotalCost());
  };

  const removeItem = (productId) => {
    dispatch(removeOrder(productId))
    dispatch(orderTotalCost());
  }

  const removeSingleItem = (productId) => {
    dispatch(removeSingleOrder(productId));
    dispatch(orderTotalCost());
  };

  const removeAllItems = () => {
    dispatch(removeAllOrders());
  };

  console.log(orders)
  const items = [{ label: "Главная" }, { label: "Корзина" }];

  const headerTitles = [
    { key: "photo", label: "Фото", width: "60px", render: (itemObj)=> (
      <img src={`/${itemObj.item.image}.png`} className="w-[60px] h-full object-cover"/>
    ) },
    { key: "title", label: "Название", render: (itemObj) => (
        <div>
            <h2 className="text-lg text-[#000] font-semibold"> 
                {itemObj.item.title}
            </h2>
            <span className="text-[#75758A] text-sm">{itemObj.item.brand}</span>
        </div>
      ), },
    { key: "price", label: "Цена", render: (itemObj)=> (
        <>
            <p className="text-[#8EE901] text-lg font-semibold">{itemObj.item.price} ₽</p>
        </>
    ) },
    { key: "quantity", label: "Количество",render: (itemObj)=> (
        <>
            <div className="w-fit flex items-center gap-4 p-2 shadow-inner rounded-3xl">
                      <span
                        onClick={() => dispatch(removeSingleItem(itemObj.item.id))}
                        className="w-[30px] h-[30px] flex items-center justify-center bg-gradient-to-b from-[#8EE902] to-[#4F9C2C] text-white rounded-full cursor-pointer"
                      >
                        <RemoveIcon />
                      </span>
                      <span className="text-2xl text-black font-semibold">{itemObj.quantity}</span>
                      <span
                        onClick={() => addItem(itemObj.item)}
                        className="w-[30px] h-[30px] flex items-center justify-center bg-gradient-to-b from-[#8EE902] to-[#4F9C2C] text-white rounded-full cursor-pointer"
                      >
                        <AddIcon />
                      </span>
            </div>
        </>
    )  },
    { key: "total", label: "Итого", render: (itemObj)=> (
        <>
            <p className="text-[#000] text-lg font-semibold">{itemObj.item.price * itemObj.quantity} ₽</p>
        </>
    )  },
    {
      key: "action",
      label: <div onClick={()=> removeAllItems()} className="flex items-center hover:text-red-500 cursor-pointer"><DeleteIcon />Delete all</div>,
      render: (itemObj) => (
        <div onClick={()=> removeItem(itemObj.item.id)} className="w-[50px] h-[50px] flex items-center justify-center bg-white shadow-lg rounded-full hover:bg-red-500 hover:text-white cursor-pointer">
          <DeleteIcon />
        </div>
      ),
    },
  ];

 



  return (
    <div className="w-full px-[10%]">
      <Breadcrumbs items={items} />
      <h2 className="text-3xl font-bold">Корзина</h2>

      <div className="w-full mt-8">
        <div className="flex justify-between gap-8 py-4 border-y border-[#efefef]">
          {headerTitles.map((header) => (
            <div
              key={header.key}
              style={{ maxWidth: header.width }}
              className="flex-1 text-[#75758A]"
            >
              {header.label}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-8 py-4 border-y border-[#efefef]"
            >
              {headerTitles.map((header) => (
                <div
                  key={header.key}
                  style={{ maxWidth: header.width }}
                  className="flex-1 text-[#75758A]"
                >
                  {header.render
                    ? header.render(order)
                    : order[header.key]}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center gap-4 mt-4">
            <div className="flex items-center gap-6">
              <span className="text-xl">Итого:</span>
                  <h2 className="p-2 text-3xl font-bold border-b-2 border-[#4F9C2C]">{totalCost} ₽</h2>
            </div>
            <div>
            <button onClick={handleOpen} className="flex-1 px-6 py-2 text-white bg-gradient-to-b from-[#8EE902] to-[#4F9C2C] font-semibold text-base text-nowrap shadow-xl rounded-3xl">Оформить заказ</button>
            </div>
        </div>
      </div>
      {openModal&& <TotalCostModal openModal={openModal} handleClose={handleClose} totalCost={totalCost}/>}
      <ToastContainer />
    </div>
  );
}
