import React, { useEffect, useState } from 'react';
import { useSound } from '../../hooks';

import bgSound from '../../assets/bg-music-game.mp3';
import styles from './styles.module.scss';

const COLORS = [
  '#FF1744',
  '#F50057',
  '#D500F9',
  '#651FFF',
  '#3D5AFE',
  '#2979FF',
  '#00B0FF',
  '#00E5FF',
  '#1DE9B6',
  '#00E676',
  '#76FF03',
  '#C6FF00',
  '#FFEA00',
  '#FFC400',
  '#FF9100',
  '#FF3D00',
] as const;

function GameScreen() {
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
  const [taps, setTaps] = useState<number>(0);

  const { playSound, stopSound } = useSound(bgSound);

  useEffect(() => {
    playSound({ loop: true });

    return () => stopSound();
  }, []);

  const handleClick = () => {
    // change bg color
    setCurrentColorIndex((prevState) =>
      prevState === COLORS.length - 1 ? 0 : prevState + 1
    );

    // add tap
    setTaps((prevState) => prevState + 1);
  };

  return (
    <div
      className={styles['game-screen']}
      // TODO: detect if is mobile or desktop to handle click or touch
      // onClick={handleClick}
      // onTouchStart={handleClick}
      style={{ backgroundColor: COLORS[currentColorIndex] }}
    >
      <h1>Your taps: {taps}</h1>
    </div>
  );
}

export default GameScreen;
