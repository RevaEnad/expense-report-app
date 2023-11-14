import { createContext, useContext } from "react";
import {
    DefaultIExpenseContext,
    IExpenseContext,
} from "../../interfaces/IExpenseContext";
import useExpenseState from "../states/useExpenseState";

interface IExpenseContextProvider {
    children: JSX.Element;
}

const ExpenseContext = createContext<IExpenseContext>(
    DefaultIExpenseContext
);

export const useExpenseContext = () => useContext(ExpenseContext);

export const ExpenseContextProvider = ({
  children,
}: IExpenseContextProvider) => {
  const state = useExpenseState();

  return (
    <ExpenseContext.Provider value={state}>
      {children}
    </ExpenseContext.Provider>
  );
};