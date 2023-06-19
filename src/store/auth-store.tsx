import React, { useMemo } from 'react';
import { getLocalStorageItem } from '@/utils/getLocalStorageItem';

interface IAuthData {
  token: string;
  name: string;
}

type Action =
  | { type: 'setAuthData'; payload: IAuthData }
  | { type: 'logout' };

type Dispatch = (action: Action) => void;
type State = { auth: null | IAuthData };
type AuthProviderProps = { children: React.ReactNode };

const AuthStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const authReducer = (_: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case 'setAuthData': {
      localStorage.setItem('authData', JSON.stringify(action.payload));
      return { auth: action.payload };
    }
    case 'logout': {
      localStorage.removeItem('authData');
      return { auth: null };
    }
    default: {
      const n: never = type;
      return n;
    }
  }
};

const initAuthData = getLocalStorageItem<IAuthData>('authData') || null;
initAuthData &&
  localStorage.setItem('authData', JSON.stringify(initAuthData));

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = React.useReducer(authReducer, {
    auth: initAuthData,
  });
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
