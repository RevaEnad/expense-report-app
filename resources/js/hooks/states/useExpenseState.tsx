import { useState, useEffect, useMemo } from 'react';
import { IExpense } from 'resources/js/interfaces/IExpense';

import {Post} from '../services/Api/index';

const useExpenseState = () => {
  const { upload: store, loading } = Post('/expense', {});

  const handleStore = async (data: IExpense) => {
    try {
      console.log(data);
    } catch (err: any) {
      throw err.errors;
    }
  };

const handleFetch = () => {
console.log('fetching...');
}


  return {
    handleStore,
handleFetch
  };
};

export default useExpenseState;