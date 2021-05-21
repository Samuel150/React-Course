import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpenseList.css";
import Card from "../UI/Card";
import {useState} from 'react'

const  ExpenseList=(props)=> {

  const [filteredYear,setFilteredYear]= useState('2020')
  const handleYearSelected=(selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  return (
    <Card className={"expenses"}>
      <ExpensesFilter filterValue={filteredYear} onYearSelected={handleYearSelected}/>
      {props.expenses.map(expense=>(
        <ExpenseItem 
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default ExpenseList;
