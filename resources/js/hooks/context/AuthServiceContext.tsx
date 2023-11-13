import { createContext, useContext } from "react";
import {
    DefaultIAuthServiceContext,
    IAuthServiceContext,
} from "../../interfaces/IAuthServiceContext";
import useServiceAuth from "../states/useServiceAuth";

interface IAuthServiceContextProvider {
    children: JSX.Element;
}

const AuthServiceContext = createContext<IAuthServiceContext>(
    DefaultIAuthServiceContext
);

export const useServiceAuthContext = () => useContext(AuthServiceContext);

export const AuthServiceContextProvider = ({
  children,
}: IAuthServiceContextProvider) => {
  const state = useServiceAuth();

  return (
    <AuthServiceContext.Provider value={state}>
      {children}
    </AuthServiceContext.Provider>
  );
};
