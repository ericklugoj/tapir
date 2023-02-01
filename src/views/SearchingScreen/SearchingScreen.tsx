import React, { useEffect } from 'react';

import { useSound } from '../../hooks';

import styles from './styles.module.scss';
import bgSound from '../../assets/bg-music.mp3';
import loadingImg from '../../assets/loading.gif';
import { useGlobalValues } from '../../context';

function SearchingScreen() {
  //TODO: delete this
  const { state, dispatch } = useGlobalValues();

  const handleClick = () => {
    dispatch({ type: 'setCurrentScreen', payload: 'GAME_SCREEN' });
  };

  const { playSound, stopSound } = useSound(bgSound);

  useEffect(() => {
    playSound({ loop: true });

    return () => stopSound();
  }, []);

  return (
    <div className={styles['searching-screen']} onClick={handleClick}>
      <img src={loadingImg} alt="searching player" />
      <h3>Looking for another player</h3>
    </div>
  );
}

export default SearchingScreen;
