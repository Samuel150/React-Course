import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import {useState} from 'react'
import AddExpense from './AddExpense'

const NewExpense = (props) =>{

  const [addNewExpense,setAddNewExpense]=useState(false)

  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id:Math.random().toString()

    }
    props.onAddExpense(expenseData)
  }

  const handleAddNewExpense=(actualState)=>{
    setAddNewExpense(actualState)
  }

  return (
    <div className="new-expense">
      {addNewExpense?(<ExpenseForm onCancelExpense={handleAddNewExpense} onSaveExpenseData={saveExpenseDataHandler}/>):(
      < AddExpense onAddingExpense={handleAddNewExpense}/>
      )}
      
    </div>
  )
}

export default NewExpense