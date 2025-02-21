'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottiePlayer = ({ isOpen = false, url ,  height, width}) => {
  const speed = isOpen ? 1 : 0.5;
  return (
    <DotLottieReact
      src={url}
      autoplay
      loop={false} 
      speed = {speed}
      style={{ height, width }}
    />
  );
};

export default LottiePlayer;
