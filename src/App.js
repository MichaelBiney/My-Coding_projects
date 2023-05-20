import React, { useState} from "react";
import Expenses from "./componets/Expenses/Expenses";
import NewExpense from "./componets/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 1, 14),
  },
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49, 
  date: new Date(2021, 2, 12)},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 3, 12),
  },
];

const App = () =>{
  const  [expenses, SetExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = expense => {
      SetExpenses((prevExpenses) =>{
        return [ expense, ...prevExpenses];
      });
    };

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses  items={expenses}/>
    </div>
    );
}
export default App;