import "./AddExpense.css"

const AddExpense = (props) =>{

  const openForm=()=>{
    props.onAddingExpense(true)
  }

  return(
  <div className="button-add">
    <button onClick={openForm}>
      Add New Expense
    </button>
  </div>
  )
}

export default AddExpense;