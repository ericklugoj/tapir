import React, { useEffect, useMemo } from 'react';
import { useGlobalValues } from '../../context';

type PlayConfig = {
  loop: boolean;
};

function useSound(src: string) {
  const sound = useMemo(() => new Audio(src), [src]);
  const { state } = useGlobalValues();
  const { mute } = state;

  useEffect(() => {
    if (mute) {
      muteSound(true);
    } else {
      muteSound(false);
    }
  }, [mute]);

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

  const muteSound = (isMute: boolean) => {
    sound.muted = isMute;
  };

  return { playSound, pauseSound, stopSound, muteSound };
}

export default useSound;
