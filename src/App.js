import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react'

const  App =()=> {
  const EXPENSES_DATA = [
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

  const [expenses,setExpenses]=useState(EXPENSES_DATA)

  const addExpenseHandler = expense =>{
    
    setExpenses(prevExpenses=>{
      console.log([expense, ...prevExpenses])
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList expenses={expenses}></ExpenseList>
    </div>
  );
}

export default App;
