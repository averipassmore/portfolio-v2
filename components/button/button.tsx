'use client';
import Image from "next/image";

interface ButtonProps {
  text?: string
  onClick?: (e:any) => void
  type?: 'primary' | 'secondary'
  iconSrc?: string
  iconAlt?: string
  iconWidth?: number
  iconHeight?: number
}

const Button = ({ text, onClick, iconSrc, iconAlt, iconHeight=24, iconWidth=24 } : ButtonProps) => {
  return (
    <div>
      <button className='flex px-[64px] py-[12px] items-center justify-center bg-[#c4c4c4] rounded-[36px] shadow-md hover:shadow-gray-600 active:shadow-none gap-[12px] z-10' onClick={onClick}>
        <span className='text-[#212628] text-[20px] font-semibold'>{text}</span>
        {iconSrc && 
          <Image 
            src={iconSrc}
            width={iconWidth}
            height={iconHeight}
            alt={iconAlt ?? 'unnamed image'}
          />
        }
      </button>
    </div>
  )
};

export default Button;