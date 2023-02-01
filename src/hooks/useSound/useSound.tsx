import React, { useEffect, useMemo, useRef } from 'react';
import { useGlobalValues } from '../../context';

type PlayConfig = {
  loop: boolean;
};

function useSound(src: string) {
  const sound = useRef<HTMLAudioElement>(new Audio(src));
  const { state } = useGlobalValues();
  const { mute } = state;

  useEffect(() => {
    console.log('hook effect called');
    if (mute) {
      muteSound(true);
    } else {
      muteSound(false);
    }
  }, [mute]);

  const playSound = ({ loop }: PlayConfig) => {
    sound.current.loop = loop;
    sound.current.play();
  };

  const pauseSound = () => {
    sound.current.pause();
  };

  const stopSound = () => {
    sound.current.pause();
    sound.current.currentTime = 0;
  };

  const muteSound = (isMute: boolean) => {
    console.log('mute called');
    sound.current.muted = isMute;
  };

  return { playSound, pauseSound, stopSound, muteSound };
}

export default useSound;
