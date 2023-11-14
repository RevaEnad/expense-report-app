import { useState, useEffect, useMemo } from 'react';
import { IExpense } from 'resources/js/interfaces/IExpense';

import {Get, Post, Put, Destroy} from '../services/Api/index';

const useExpenseState = () => {
    const [expenses, setExpenses] = useState<Array<IExpense>>([]);
    const [expense, setExpense] = useState<IExpense>();
    const { fetch, loading: fetchLoading } = Get('/expense', {});
    const { upload: store, loading } = Post('/expense', {});
    const {destroy} = Destroy('/expense');
    const { update, data: updatedData } = Put('/expense', {});

    const handleStore = async (data: any) => {
        try {
            const res = await store({data});

            if(res.status === 200){
                const newExpense: IExpense = res.data;
                setExpenses([...expenses, newExpense]);
            }

            return res.status;
        } catch (err: any) {
        throw err.errors;
        }
    };

    const handleDelete = async (id: number) => {
        const res = await destroy(id);
        if(res){
            const updatedExpenses = expenses.filter((expense) => expense.id !== id);
            setExpenses(updatedExpenses);
        }
    }

    const handleFetch = async () => {
        const res = await fetch();
        setExpenses(res.data);
    }

    const handleShow = async (id: number) => {
        const expense = expenses.filter((expense) => expense.id === id)[0] as IExpense;
        setExpense(expense);
        return expense;
    }

    const handleUpdate = async (data: any, id: number) => await update(id, data);

    useEffect(()=>{
        handleFetch();
    }, []);

    useEffect(()=>{
        if(updatedData){
            handleFetch();
        }
    }, [updatedData]);


  return {
    expenses,
    expense,
    handleStore,
    handleFetch,
    handleShow,
    handleDelete,
    handleUpdate
  };
};

export default useExpenseState;