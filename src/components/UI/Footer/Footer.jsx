import React from "react";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-[100px]">
      <div className="w-full flex items-center justify-between py-4 px-[10%] bg-[#515668]">
        <div className="flex items-center text-[#75CB13] gap-2">
          <DraftsOutlinedIcon fontSize="large" />
          <div className="text-lg font-semibold flex flex-col text-white">
            <span className="text-[#75CB13]">Subscribe</span>
            to our discounts
          </div>
        </div>
        <div className="relative flex w-6/12 bg-red-300">
          <input
            type="email"
            placeholder="Email..."
            className="w-full px-4 py-2"
          />
          <button className="px-4 py-2 text-white text-lg bg-[#6A6D7D]">
            Subscribe
          </button>
        </div>

        <div className="flex gap-2 text-xl text-[#75CB13]">
          <CallOutlinedIcon fontSize="large" />
          Phone
        </div>
      </div>

      <div className="w-full flex justify-between gap-8 py-8 px-[10%]">
        <div className="flex-1 flex flex-col gap-4">
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            fotoprokat<span className="text-[#4F9F1A]">24</span>
          </div>

          <p>lorem lorem lorem lorem lorem lorem lorem loreme lorem lorem</p>
          <p>@ 2015-2019 Fotoprokat24</p>
          <div className="flex gap-2">
            
            <div className="w-[50px] h-[50px] bg-blue-900 text-white text-3xl flex items-center justify-center rounded-full">
            <FacebookIcon fontSize="inherit"/>
            </div>
            <div className="w-[50px] h-[50px] bg-blue-600 text-white text-3xl flex items-center justify-center rounded-full">
                <TwitterIcon fontSize="inherit"/>
            </div>
            <div className="w-[50px] h-[50px] bg-blue-800 text-white text-3xl flex items-center justify-center rounded-full">
                <ViewKanbanIcon fontSize="inherit"/>
            </div>
            <div className="w-[50px] h-[50px] bg-red-900 text-white text-3xl flex items-center justify-center rounded-full">
                <YouTubeIcon fontSize="inherit"/>
            </div>
            <div className="w-[50px] h-[50px] bg-pink-900 text-white text-3xl flex items-center justify-center rounded-full">
                <InstagramIcon fontSize="inherit"/>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Company</h2>
            <ul className="flex flex-col gap-2">
                <li className="hover:underline decoration-solid"><a href="/">O kopmpany</a></li>
                <li className="hover:underline decoration-solid"><a href="/">News</a></li>
                <li className="hover:underline decoration-solid"><a href="/">Vacansy</a></li>
                <li className="hover:underline decoration-solid"><a href="/">Polytics</a></li>
                <li className="hover:underline decoration-solid"><a href="/">Confidesalts</a></li>
            </ul>
        </div>
        <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Clients</h2>
            <ul className="flex flex-col gap-2">
                <li className="hover:underline decoration-solid"><a href="/">Tochki vidachi</a></li>
                <li className="hover:underline decoration-solid"><a href="/">Discounts</a></li>
                <li className="hover:underline decoration-solid"><a href="/">Bonus programs</a></li>
            </ul>
        </div>
        <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Help</h2>
            <ul className="flex flex-col gap-2">
                <li className="hover:underline decoration-solid"><a href="/">Questions answers</a></li>
                <li className="hover:underline decoration-solid"><a href="/">Rules</a></li>
                <li className="hover:underline decoration-solid"><a href="/">Delivery</a></li>
                <li className="hover:underline decoration-solid"><a href="/">Payment</a></li>
            </ul>
        </div>
        <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Contacts</h2>
            <ul className="flex flex-col gap-2">
                <li className="hover:underline decoration-solid"><a href="/">Fotoprokat24</a></li>
                <li className="hover:underline decoration-solid"><a href="/">Moscov prospect</a></li>
                <li className="hover:underline decoration-solid"><a href="/">mira</a></li>
                <li className="hover:underline decoration-solid"><a href="/">Py-ms, 9:00-21:00</a></li>
                <li className="hover:underline decoration-solid"><a href="/">+7(999) 999-99-99</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}
