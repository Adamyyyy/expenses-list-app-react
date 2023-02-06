import "./ExpenseItem.css";
import ExpenseDate from "./expenseDate/ExpenseDate";
import ExpenseItemCard from "../expenseItemCard/ExpenseItemCard";

const ExpenseItem = (props) => {
  return (
    <ExpenseItemCard>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </ExpenseItemCard>
  );
};

export default ExpenseItem;
