import { StartScreen, SearchingScreen } from '../../views';
import { useGlobalValues } from '../../context';

import styles from '../../app.module.scss';

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
        return <StartScreen />;

      case 'GAME_OVER_SCREEN':
        return <StartScreen />;

      default:
        break;
    }
  };

  return <div className={styles.app}>{renderScreen()}</div>;
}

export default Tapir;
