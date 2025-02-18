'use client'

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottiePlayer = ({ src, height = '100%', width = '100%' }) => {
  return (
    <Player
      src={src}
      autoplay
      loop
      style={{ height, width }}
    />
  );
};

export default LottiePlayer;
