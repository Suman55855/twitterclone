import React from 'react'
// import { CiHome } from "react-icons/ci";
// import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RiNotificationLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const LeftSidebar = () => {
  return (
    <div className='w-[20%]'>
        <div>
            <div>
                <img className='ml-4' width={"30px"} src='https://freepnglogo.com/images/all_img/1691832278twitter-x-logo-png.png' alt='twitter-logo'/>
            </div>
            <div className='my-4'>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                {/* <CiHome /> */}
                <div>
                <GoHome size="24px"/>
                {/* <GoHomeFill size="24px"/> */}
                </div>
                <h1 className='font-bold text-lg ml-2'>Home</h1>
                </div>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                {/* <CiHome /> */}
                <div>
                {/* <GoHome /> */}
                <IoSearch size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Explore</h1>
                </div>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                {/* <CiHome /> */}
                <div>
                {/* <GoHome /> */}
                <RiNotificationLine size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Notification</h1>
                </div>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                {/* <CiHome /> */}
                <div>
                {/* <GoHome /> */}
                <FaRegUser size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Profile</h1>
                </div>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                {/* <CiHome /> */}
                <div>
                {/* <GoHome /> */}
                <FaRegBookmark size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
                </div>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                {/* <CiHome /> */}
                <div>
                {/* <GoHome /> */}
                <MdLogout size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Logout</h1>
                </div>
                <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar