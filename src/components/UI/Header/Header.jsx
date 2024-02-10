import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoginModal from "../../LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { totalOrderQuantity } from "../../../utils/totalOrderQuantity";
import SideMenuBar from "../../SideMenuBar"
// Icons
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Person3Icon from "@mui/icons-material/Person3";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../../redux/Auth/auth.slice";

const links = [
  { path: "/home", title: "Home" },
  { path: "/catalog", title: "Catalog" },
  { path: "/company", title: "Company" },
  { path: "/news", title: "News" },
  { path: "/contacts", title: "Contacts" },
];

export default function Header() {
  const [openModal, setOpenModal] = useState();
  const [openSideBarMenu, setOpenSideBarMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderQuantity = useSelector((store) => store?.cart?.items);
  const authCheck = useSelector((store) => store?.auth?.isAuth);
  const userData = useSelector((store) => store?.auth?.userData);

  const handleOpen = () => setOpenModal(true);
 
  const handleClose = () => setOpenModal(false);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <>
      {authCheck ? (
        <div className="fixed bg-white h-[80px] w-full top-0 flex items-center justify-between pl-[10%] z-50">
          <div className="flex items-center gap-4">
            <div onClick={()=>setOpenSideBarMenu(true)} className="cursor-pointer">
              <MenuIcon fontSize="large" />
            </div>
            <div
              className="text-2xl font-bold cursor-pointer"
              onClick={() => navigate("/")}
            >
              fotoprokat<span className="text-[#4F9F1A]">24</span>
            </div>
          </div>

          <div className="flex items-center text-3xl gap-4">
            <div>
              <h2 className="text-lg font-semibold">{userData.firstName}</h2>
              <p className="text-sm font-semibold text-[#535667]">
                {userData.email}
              </p>
            </div>

            <div className="relative cursor-pointer">
              <StarBorderIcon fontSize="inherit" />
              <span className="absolute top-0 right-[-5px] w-[22px] h-[22px] flex items-center justify-center bg-[#535667] text-white text-sm rounded-full">
                0
              </span>
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/products")}
            >
              <BarChartIcon fontSize="inherit" />
              <span className="absolute top-0 right-[-5px] w-[22px] h-[22px] flex items-center justify-center bg-[#535667] text-white text-sm rounded-full">
                0
              </span>
            </div>
            <div className="relative cursor-pointer">
              <ShoppingCartOutlinedIcon
                fontSize="inherit"
                onClick={() => navigate("/cart")}
              />
              <span className="absolute top-0 right-[-5px] w-[22px] h-[22px] flex items-center justify-center bg-[#535667] text-white text-sm rounded-full">
                {totalOrderQuantity(orderQuantity)}
              </span>
            </div>
            <div className="flex">
              <div className="border text-[#808080] border-[#efefef] p-4 cursor-pointer">
                <SearchIcon fontSize="mediom" />
              </div>
              <div className="border text-[#808080] border-[#efefef] p-4 cursor-pointer">
                {userData.gender === "female" ? (
                  <Person3Icon fontSize="mediom" />
                ) : (
                  <PersonOutlineIcon fontSize="mediom" />
                )}
              </div>
              <div
                onClick={() => logOut()}
                className="border text-[#808080] border-[#efefef] p-4 cursor-pointer"
              >
                <LogoutIcon fontSize="mediom" />
              </div>
            </div>
          </div>
          {openSideBarMenu&& <SideMenuBar openSideBarMenu={openSideBarMenu} setOpenSideBarMenu={setOpenSideBarMenu}/>}
        </div>
      ) : (
        <div className="fixed bg-white h-[80px] w-full top-0 flex items-center justify-between px-[10%] z-50">
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            fotoprokat<span className="text-[#4F9F1A]">24</span>
          </div>
          <div className="text-lg">
            <ul className="flex items-center gap-6">
              {links.map((link, i) => (
                <li className="font-semibold">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => isActive && "text-orange-500"}
                    key={i}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <input
              placeholder="Search"
              className="px-4 py-2 border border-[#8a8a8a] rounded-3xl"
            />
            <h2
              className="text-lg font-semibold cursor-pointer"
              onClick={handleOpen}
            >
              LogIn
            </h2>
          </div>

          <div className="flex items-center text-3xl gap-4">
            <div className="relative cursor-pointer">
              <StarBorderIcon fontSize="inherit" />
              <span className="absolute top-0 right-[-5px] w-[22px] h-[22px] flex items-center justify-center bg-[#535667] text-white text-sm rounded-full">
                0
              </span>
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/products")}
            >
              <BarChartIcon fontSize="inherit" />
              <span className="absolute top-0 right-[-5px] w-[22px] h-[22px] flex items-center justify-center bg-[#535667] text-white text-sm rounded-full">
                0
              </span>
            </div>
            <div className="relative cursor-pointer">
              <ShoppingCartOutlinedIcon
                fontSize="inherit"
                onClick={() => navigate("/cart")}
              />
              <span className="absolute top-0 right-[-5px] w-[22px] h-[22px] flex items-center justify-center bg-[#535667] text-white text-sm rounded-full">
                {totalOrderQuantity(orderQuantity)}
              </span>
            </div>
          </div>
          {openModal && (
            <LoginModal openModal={openModal} handleClose={handleClose} />
          )}
        </div>
      )}
    </>
  );
}
