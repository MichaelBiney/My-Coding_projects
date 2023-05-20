import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
     const[entertedTitle, setEnteredTitle] = useState('');
     const[entertedAmount, setEnteredAmount] = useState('');
     const[entertedDate, setEnteredDate]= useState('');


    const titileChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData= {
            title: entertedTitle,
            amount: +entertedAmount,
            date: new Date(entertedDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    };

    return( 
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={entertedTitle} onChange={titileChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={entertedAmount} onChange={amountChangeHandler}min="0.01" step="0.01" />
        </div>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={entertedDate } onChange={dateChangeHandler} min="2021-01-01" max="2022" />
        </div>
    </div>
    </div>
    <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
    <button type="submit">Add Expense</button>
    </div>
    </form>
    );
};

export default ExpenseForm;