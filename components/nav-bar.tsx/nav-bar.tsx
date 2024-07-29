'use client';
import { NavItem } from "@/types";
import Image from "next/image";

interface NavBarProps {
  navItems: NavItem[],
  navIconSrc: string
}

const NavBar = ({ navItems, navIconSrc } : NavBarProps) => {
  return (
    <div className='flex items-center justify-center w-full min-h-[100px] bg-gradient-to-b from-[#2c4234] to-[#212628] px-[40px]'>
      <div className='flex items-center justify-between w-full h-full max-w-[1600px]'>
      <div className='flex items-center gap-[50px]'>
        <div className='flex items-center w-[65px]'>
          <Image 
            src={navIconSrc}
            alt={'nav logo'}
            width={30}
            height={30}
            className='filter invert-[100%] sepia-0 saturate-[203%] hue-rotate-[345deg] brightness-[117%] contrast-[88%] animate-spin360'
          />
        </div>
        <div className='flex items-center gap-[54px]'>
          {navItems.map((item:NavItem) => 
            <p key={item.text} className='text-[#c4c4c4] text-[20px] font-semibold cursor-pointer hover:text-[#f0f0f0]' onClick={item.onClick}>{item.text}</p>
          )}
        </div>
      </div>
      </div>
    </div>
  )
};

export default NavBar;