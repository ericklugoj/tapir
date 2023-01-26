import React, { useEffect } from 'react';

import { useSound } from '../../hooks';

import bgSound from '../../assets/bg-music.mp3';

function SearchingScreen() {
  const { playSound, stopSound } = useSound(bgSound);

  useEffect(() => {
    playSound({ loop: false });

    return () => {
      stopSound();
    };
  }, []);

  return <div>SearchingScreen</div>;
}

export default SearchingScreen;
