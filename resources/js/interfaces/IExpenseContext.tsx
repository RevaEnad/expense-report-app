import { DefaultIExponst, IExpense } from "./IExpense";

export interface IExpenseContext {
    expenses: Array<IExpense>;
    expense: IExpense;
    handleFetch: () => void;
    handleStore: (data: any) => void;
    handleShow: (id: number) => void;
    handleUpdate: (data: any, id: number) => void;
    handleDelete: (id: number) => void;
}

export const DefaultIExpenseContext = {
    expenses: [DefaultIExponst],
    expense: DefaultIExponst,
    handleFetch: () => {
        /** void */
    },
    handleStore: (data: any) => {
        /** void */
    },
    handleShow: (id: number) => {
        /** void */
    },
    handleUpdate: (data:any, id: number) => {
        /** void */
    },
    handleDelete: (id: number) => {
        /** void */
    }
};