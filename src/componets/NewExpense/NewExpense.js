import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, SetIsEditing] = useState(false)

    const onSaveExpenseData = (enteredExpenseData) => {;
    const expenseData ={
        ...enteredExpenseData,
        id: Math.random().toString()
        };
            props.onAddExpense(expenseData);
            SetIsEditing(false);
    };

     const starteditingHandler = () => {
        SetIsEditing(true);
     }

     const stopEditingHandler = () => {
        SetIsEditing(false);
     }

    return( 
    <div className="new-expense">
       {!isEditing &&(
         <button  onClick={starteditingHandler}> Add new Expense</button>
       )}
        {isEditing && (
          <ExpenseForm 
             onSaveExpenseData={onSaveExpenseData} 
             onCancel={stopEditingHandler}
             />
        )}
    </div>
    );
};

export default NewExpense;