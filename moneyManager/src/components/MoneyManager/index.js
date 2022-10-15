import {Component} from 'react'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {list: [], title: '', amount: '', type: ''}

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  amountChange = event => {
    this.setState({amount: event.target.value})
  }

  typeChange = event => {
    this.setState({type: event.target.value})
  }

  onTotalIncome = () => {
    const {list} = this.state
    let x
    list.forEach(each => {
      if (each.type === transactionTypeOptions[0].optionId) {
        x = x + each.amount
      }
    })
    return x
  }

  onTotalExpenses = () => {
    const {list} = this.state
    let x
    list.forEach(each => {
      if (each.type === transactionTypeOptions[1].optionId) {
        x = x + each.amount
      }
    })
    return x
  }

  additem = () => {
    const {title, amount, type} = this.state
    const item = {
      title,
      amount,
      type,
    }
    this.setState(prevState => ({list: [...prevState.list, item]}))
  }

  render() {
    const {list} = this.state
    const totalIncome = this.onTotalIncome()
    const totalExpenses = this.onTotalExpenses()
    const moneydetails = {
      totalBalance: totalIncome - totalExpenses,
      totalIncome,
      totalExpenses,
    }
    return (
      <div className="back">
        <div className="titlecontainer">
          <h1 className="heading">Hi,Richard</h1>
          <p className="welcometext">
            Welcome back to your
            <span className="moneymanagertext">Money Manager</span>
          </p>
        </div>
        <div className="cards-container">
          <MoneyDetails moneydetails={moneydetails} />
        </div>
        <div className="below-container">
          <div className="add-transaction">
            <h1 className="transaction-heading">Add Transaction</h1>
            <form className="formel" onSubmit={this.additem}>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="inputel"
                onChange={this.titleChange}
              />
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="inputel"
                onChange={this.amountChange}
              />
              <label
                className="label"
                htmlFor="type"
                onChange={this.typeChange}
              >
                TYPE
              </label>
              <select className="dropdown" id="type">
                <option value="INCOME" selected>
                  Income
                </option>
                <option value="EXPENSES">Expenses</option>
              </select>
              <button className="addbutton" type="submit">
                Add
              </button>
            </form>
          </div>

          <div className="history-container">
            <div className="historylabels">
              <p className="p">Title Amount Type</p>
              {list.map(each => (
                <TransactionItem
                  itemDetails={each}
                  deletefunc={this.deleteitem}
                  key={each.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
