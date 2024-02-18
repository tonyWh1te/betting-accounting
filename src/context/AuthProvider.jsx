import { createContext, useMemo, useCallback } from 'react';
import useLocalStorage from '@rehooks/local-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth, removeAuth] = useLocalStorage('auth', {});

  const login = useCallback((newUser, callback) => {
    setAuth(newUser);

    if (callback) {
      callback();
    }
  }, []);

  const logout = useCallback((callback) => {
    removeAuth();

    if (callback) {
      callback();
    }
  }, []);

  const value = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
export { AuthProvider };
