import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // CAN BE DONE EITHER WAY!!!!
  //one use state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: ""
  //   });

  //   const titleChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //         return {...prevState, enteredTitle: event.target.value};
  //     });
  //   };

  //   const amountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //         return {...prevState, enteredAmount: event.target.value};
  //     });
  //   };

  //   const dateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //         return {...prevState, enteredDate: event.target.value};
  //     });
  //   };

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // create a new object with the data that is being passed through
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
