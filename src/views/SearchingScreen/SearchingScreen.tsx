import React, { useEffect } from 'react';

import { useSound } from '../../hooks';

import bgSound from '../../assets/bg-music.mp3';

function SearchingScreen() {
  const { playSound } = useSound(bgSound);

  useEffect(() => {
    playSound();
  }, []);

  return <div>SearchingScreen</div>;
}

export default SearchingScreen;
