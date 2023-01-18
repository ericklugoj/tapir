import { StartScreen } from './views/StartScreen';

import styles from './app.module.scss';
import './styles/main.scss';

function App() {
  return (
    <div className={styles.app}>
      <StartScreen />
    </div>
  );
}

export default App;
