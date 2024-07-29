'use client';
import Image from 'next/image';

interface SkillPillProps {
  iconSrc?: string
  iconAlt?: string
  iconWidth?: number
  iconHeight?: number
  text?: string
}
const SkillPill = ({ iconSrc, iconAlt, text, iconHeight=45, iconWidth=45 } : SkillPillProps) => {
  return (
    <div className='flex items-center gap-[16px]'>
      {iconSrc && 
        <Image
          src={iconSrc}
          width={iconWidth}
          height={iconHeight}
          alt={iconAlt ?? 'unamed icon'}
        />
      }
      <p className='max-w-[112px] text-[16px] font-medium leading-[1.2]'>{text}</p>
    </div>
  )
};

export default SkillPill;