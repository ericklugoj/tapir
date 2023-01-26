import { createContext, ReactNode, useContext, useReducer } from 'react';

type Screen =
  | 'START_SCREEN'
  | 'SEARCHING_PLAYERS_SCREEN'
  | 'GAME_SCREEN'
  | 'GAME_OVER_SCREEN';
type Action =
  | { type: 'setCurrentScreen'; payload: Screen }
  | { type: 'decrement' };
type Dispatch = (action: Action) => void;
type State = { currentScreen: Screen };
type GlobalProviderProps = { children: ReactNode };

const GlobalStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function globalReducer(state: State, action: Action) {
  switch (action.type) {
    case 'setCurrentScreen': {
      return { currentScreen: action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const initialState: State = {
  currentScreen: 'START_SCREEN',
};

function GlobalProvider({ children }: GlobalProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const value = { state, dispatch };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}

function useGlobalValues() {
  const context = useContext(GlobalStateContext);

  if (context === undefined) {
    throw new Error('useGlobalValues must be used within a GlobalProvider');
  }

  return context;
}

export { GlobalProvider, useGlobalValues };
