import './ExpenseForm.css'
import {useState} from 'react'

const ExpenseForm = (props)=>{
  const [enteredTitle,setEnteredTitle]= useState('')
  const [enteredAmount, setEnteredAmount]=useState('')
  const [enteredDate,setEnteredDate]=useState('')

  
  // const [userInput,setUserInput]  =useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // })

  const titleChangeHandler = ($event)=>{
    setEnteredTitle($event.target.value)
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle:$event.target.value}
    // })
  }

  const amountChangeHandler = ($event)=>{
    setEnteredAmount($event.target.value)
  }

  const dateChangeHandler=($event)=>{
    console.log($event.target.value)
    setEnteredDate($event.target.value)
  }

  const submitHandler =($event)=>{
    $event.preventDefault()
    const expenseData={
      title:enteredTitle,
      amount:+enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  const cancelSubmit=()=>{
    props.onCancelExpense(false)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title
          </label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>
            Amount
          </label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>
            Date
          </label>
          <input type="date" value={enteredDate} min="2019-01-01" step="2024-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelSubmit}>
          Cancel
        </button>
        <button type="summit">
          Add Expense
        </button>

      </div>
    </form>
  );
}
export default ExpenseForm