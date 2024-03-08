import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import {getDataUser} from '../services';
import auth from '@react-native-firebase/auth';

export const AppContext = createContext(null);

export const AppContextProvider = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [register, setRegister] = useState(true);
  const [user, setUser] = useState(null);
  const [dataUser, setDataUser] = useState(null);

  async function getUserData() {
    try {
      const getRole = await getDataUser(user);
      setDataUser(getRole);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const values = useMemo(
    () => ({
      user,
      register,
      setRegister,
      dataUser,
      getUserData,
    }),
    [user, register, dataUser],
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("Context doesn't exist");
  return context;
}

export default useAppContext;
