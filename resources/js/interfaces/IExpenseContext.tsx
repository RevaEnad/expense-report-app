import { IExpense } from "./IExpense";

export interface IExpenseContext {
    handleFetch: () => void;
    handleStore: (data: IExpense) => void;
    }
    
    export const DefaultIExpenseContext = {
    handleFetch: () => { /** void */},
    handleStore: (data: IExpense) => { /** void */},
    }