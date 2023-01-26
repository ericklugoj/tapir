import React, { useMemo } from 'react';

type PlayConfig = {
  loop: boolean;
};

function useSound(src: string) {
  const sound = useMemo(() => new Audio(src), [src]);

  const playSound = ({ loop }: PlayConfig) => {
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
