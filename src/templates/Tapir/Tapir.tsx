import { useGlobalValues } from '../../context';
import { StartScreen, SearchingScreen, GameScreen } from '../../views';
import { MuteButton } from '../../components';

import styles from './styles.module.scss';

function Tapir() {
  const { state } = useGlobalValues();

  const renderScreen = () => {
    const { currentScreen } = state;

    switch (currentScreen) {
      case 'START_SCREEN':
        return <StartScreen />;

      case 'SEARCHING_PLAYERS_SCREEN':
        return <SearchingScreen />;

      case 'GAME_SCREEN':
        return <GameScreen />;

      case 'GAME_OVER_SCREEN':
        return <StartScreen />;

      default:
        break;
    }
  };

  return (
    <main className={styles.app}>
      <div className={styles['app__mute-button']}>
        <MuteButton />
      </div>
      {renderScreen()}
    </main>
  );
}

export default Tapir;
