import { createContext, ReactNode, useEffect, useState } from 'react';

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // fetch w/ async await then useEffect
  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, [])


  // fetch inside useEffect

  // useEffect(() => {
  //   fetch('http://localhost:3000/transactions')
  //     .then(response => response.json())
  //       .then(data => {
  //         console.log(data)
  //       })
  // }, [])

  return (
      <TransactionsContext.Provider 
      value={{transactions}}
      >
        {children}
      </TransactionsContext.Provider>
    )
}