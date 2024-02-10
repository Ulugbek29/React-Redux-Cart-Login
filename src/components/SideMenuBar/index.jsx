import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Inventory2Icon from '@mui/icons-material/Inventory2';


export default function index({openSideBarMenu,setOpenSideBarMenu=()=>{}}) {

    const links = [
        { path: "/home", title: "Home", icon:  HomeIcon},
        { path: "/products", title: "Products", icon:  Inventory2Icon},
        { path: "/catalog", title: "Catalog", icon: CategoryIcon },
        { path: "/company", title: "Company", icon:StoreIcon  },
        { path: "/news", title: "News", icon:NewspaperIcon  },
        { path: "/contacts", title: "Contacts", icon:  ContactMailIcon},
      ];

    const handleClose = () => {
        setOpenSideBarMenu(false);
      };
      

  return (
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openSideBarMenu}
        onClick={handleClose}
      >
        <div className='fixed top-0 bottom-0 left-0 w-[250px] bg-white'>
             <ul>
             {links.map((link,index)=> (
                <li key={index} onClick={handleClose} className="flex justify-between py-4 px-6 text-lg text-black font-semibold cursor-pointer hover:bg-[#efefef] ">
                <link.icon/>
                    <Link to={link.path}>
                        {link.title}
                    </Link>
                </li>
             ))}
             </ul>
        </div>
      </Backdrop>
  )
}
