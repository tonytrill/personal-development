import './ExpenseItem.css'

function ExpenseItem() {
  const expsenseDate = new Date(2021,2,28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67

  return (
    <div className="expense-item">
      <div>{expsenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
