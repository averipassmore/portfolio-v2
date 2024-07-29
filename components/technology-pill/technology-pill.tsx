import Image from "next/image";
import { SkillItem } from "@/types";

interface TechnologyPillProps {
  item: SkillItem
}

const TechnologyPill = ({ item } : TechnologyPillProps) => {
  return (
    <div 
      className='flex flex-col items-center justify-center gap-[12px] rounded-[36px] border-4 border-[#2c4234] w-[150px] h-[130px] animate-fadeIn3 shadow-md shadow-gray-600'
    >
      <Image
        src={item.iconSrc}
        alt={item.iconAlt}
        width={60}
        height={60}
      />
      <p className='text-[16px] font-medium'>{item.text}</p>
    </div>
  )
};

export default TechnologyPill;