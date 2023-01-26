import React from 'react';

function useSound(src: string) {
  const sound = new Audio(src);

  const playSound = (loop: boolean = false) => {
    sound.loop = loop;
    sound.play();
  };

  const pauseSound = () => {
    sound.pause();
  };

  const stopSound = () => {
    sound.pause();
    sound.currentTime = 0;
  };

  return { playSound, pauseSound, stopSound };
}

export default useSound;
