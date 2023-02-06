import "./Expenses.css";
import ExpenseItem from "./expenseItem/ExpenseItem";
import ExpensesFilter from "./expensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2022");

  const onFilterSelected = (filter) => {
    setFilter(filter);
  };

  const expenses = props.expenses;

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  let expensesContent = <p className="no-result">No result found</p>;

  if (filteredExpenses && filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        key={expense.id}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpensesFilter onSelect={onFilterSelected} selected={filter} />
      {expensesContent}
    </div>
  );
};

export default Expenses;
