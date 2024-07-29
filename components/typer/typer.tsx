'use client';
import { useState, useEffect } from "react";

interface TyperProps {
  contents: string[]
  typingDelay?: number
  finishDelay?: number
  restartDelay?: number
}

const Typer = ({contents, typingDelay=100, finishDelay=3000} : TyperProps) => {
  const [activeText, setActiveText] = useState('');
  const [itemIndex, setItemIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [reachedTextLimit, setReachedTextLimit] = useState(false);
  const [finishDelayReached, setFinishDelayReached] = useState(false);

  const updateTyping = () => {
    if (reachedTextLimit && itemIndex === contents?.length - 1) {
      setActiveText(contents[itemIndex]);
    } else if (reachedTextLimit) {
      setFinishDelayReached(true);
      if (textIndex === 0) {
        setReachedTextLimit(false);
        setTextIndex(0);
        setItemIndex(prev => prev + 1);
        setActiveText('');
      } else {
        setActiveText(prevText => prevText.slice(0, textIndex));
        setTextIndex(prev => prev - 1);
      }
    } else {
      setFinishDelayReached(false);
      if (textIndex === contents[itemIndex].length) setReachedTextLimit(true);
      else {
        setActiveText(prevText => prevText + contents[itemIndex][textIndex]);
        setTextIndex(prevIndex => prevIndex + 1);
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(updateTyping, reachedTextLimit && !finishDelayReached ? finishDelay : typingDelay);
    return () => clearTimeout(timeout);
  }, [textIndex, typingDelay, itemIndex, reachedTextLimit, finishDelay, finishDelayReached]);

  return (
    <div className='flex items-center gap-[2px]'>
      <div>{activeText}</div>
      <div className='flex animate-blink h-[56px] w-[6px]'></div>
    </div>
  )
};

export default Typer;