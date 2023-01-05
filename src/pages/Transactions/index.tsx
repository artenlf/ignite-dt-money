import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHightlight, TransactionsContainer, TransactionsTable } from './styles';

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {

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
      <div>
        <Header />
        <Summary />
        <TransactionsContainer>
          <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
            return  (
                <tr key={transaction.id}>
                  <td width="50%">
                    {transaction.description}
                  </td>
                  <td>
                    <PriceHightlight 
                      variant={transaction.type}
                    >
                      {transaction.price}
                      </PriceHightlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>

              ) 
           })}
            
          </tbody>
        </TransactionsTable>
        
        </TransactionsContainer>
      </div>
  )
}