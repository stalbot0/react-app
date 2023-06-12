import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // uses destructuring to create an array of objects that are expenses, along with a fxn that allows us to alter the state of the array. 
  // The useState initial state value are the DUMMY_EXPENSES
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // we're setting our new expense to the first element in the NEW array, and then using the spread operation for the rest of the expenses
    //  following the newly created expense. the PrevExpenses fxn will update our expenses based on a snapshot of our previously used expenses
    setExpenses((prevExpenses) => {return [expense, ...prevExpenses]});
  };

  // return React.createElement(
  //   "div", //opening div
  //   {}, //attributes that should be set
  //   React.createElement(Expenses, {items: expenses})
  //   );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
