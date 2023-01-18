import { useState } from 'react';
import styles from './styles.module.scss';

const StartScreen = () => {
  const [taps, setTaps] = useState(0);
  const handleClick = () => {
    setTaps((prevState) => prevState + 1);
  };

  return (
    <main className={styles['start-screen']} onClick={handleClick}>
      <h1>Tap to start</h1>
      <p>{taps} players looking for a match</p>
    </main>
  );
};

export default StartScreen;
