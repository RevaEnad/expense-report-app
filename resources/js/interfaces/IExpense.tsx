
export interface IExpense {
id: number;
name: string;
issuer: string;
amount: number;
date: string;
status: string;
}

export const DefaultIExponst = {
id: 0,
name: '',
issuer: '',
amount: 0,
date: '',
status: 'Pending',
}