import './index.css'

const MoneyDetails = props => {
  const {moneydetails} = props
  const {totalBalance, totalIncome, totalExpenses} = moneydetails

  return (
    <div className="contaier">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balanceAmount"
          className="image"
        />
        <div className="d">
          <p className="heading">Your Balance</p>
          <p className="money" testid="balanceAmount">
            {totalBalance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="incomeAmount"
          className="image"
        />
        <div className="d">
          <p className="heading">Your Income</p>
          <p className="money" testid="incomeAmount">
            {totalIncome}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expensesAmount"
          className="image"
        />
        <div className="d">
          <p className="heading">Your Expenses</p>
          <p className="money" testid="expensesAmount">
            {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
