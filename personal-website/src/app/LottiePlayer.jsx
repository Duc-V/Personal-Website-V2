'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottiePlayer = ({ isOpen = false, url ,  height, width, loop=false }) => {
  const speed = isOpen ? 1 : 0.5;
  return (
    <DotLottieReact
      src={url}
      autoplay
      loop={loop} 
      speed = {speed}
      style={{ height, width }}
    />
  );
};

export default LottiePlayer;
