import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";
import {useState} from 'react'

const  Expenses=(props)=> {

  const [filteredYear,setFilteredYear]= useState('2020')
  
  const handleYearSelected=(selectedYear)=>{
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  })

  

  return (
    <Card className={"expenses"}>
      <ExpensesFilter filterValue={filteredYear} onYearSelected={handleYearSelected}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
