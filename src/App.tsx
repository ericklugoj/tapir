import { GlobalProvider } from './context';
import { Tapir } from './templates';

import './styles/main.scss';

function App() {
  return (
    <>
      <GlobalProvider>
        <Tapir />
      </GlobalProvider>
    </>
  );
}

export default App;
