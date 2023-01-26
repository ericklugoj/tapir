import { useGlobalValues } from '../../context';

import styles from './styles.module.scss';

const StartScreen = () => {
  const handleClick = () => {
    dispatch({ type: 'setCurrentScreen', payload: 'SEARCHING_PLAYERS_SCREEN' });
  };

  const { state, dispatch } = useGlobalValues();

  console.log({ state });

  return (
    <div className={styles['start-screen']} onClick={handleClick}>
      <h1>Tap to start</h1>
      <p>0 players looking for a match</p>
    </div>
  );
};

export default StartScreen;
