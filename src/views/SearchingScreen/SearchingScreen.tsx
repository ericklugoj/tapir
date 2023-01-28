import React, { useEffect } from 'react';

import { useSound } from '../../hooks';

import styles from './styles.module.scss';
import bgSound from '../../assets/bg-music.mp3';
import loadingImg from '../../assets/loading.gif';

function SearchingScreen() {
  const { playSound, stopSound } = useSound(bgSound);

  useEffect(() => {
    playSound({ loop: false });

    return () => {
      stopSound();
    };
  }, []);

  return (
    <div className={styles['searching-screen']}>
      <img src={loadingImg} alt="searching player" />
      <h3>Looking for another player</h3>
    </div>
  );
}

export default SearchingScreen;
