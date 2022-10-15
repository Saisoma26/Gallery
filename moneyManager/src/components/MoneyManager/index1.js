import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index1'

import TransactionItem from '../TransactionItem/index1'

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
  state = {list: [], title: '', amount: '', type: 'INCOME'}

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
    let x = 0
    list.forEach(each => {
      if (each.type === transactionTypeOptions[0].optionId) {
        x += parseInt(each.amount)
      }
    })
    return x
  }

  onTotalExpenses = () => {
    const {list} = this.state
    let x = 0
    list.forEach(each => {
      if (each.type === transactionTypeOptions[1].optionId) {
        x += parseInt(each.amount)
      }
    })
    return x
  }

  additem = event => {
    event.preventDefault()
    const {title, amount, type, list} = this.state
    const item = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    const updatelist = [...list, item]
    this.setState(prevState => ({
      list: updatelist,
      title: '',
      amount: '',
    }))
  }

  deleteitem = id => {
    const {list} = this.state
    const updatedlist = list.filter(each => each.id !== id)
    this.setState({list: updatedlist})
  }

  render() {
    const {list, title, amount} = this.state
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
        <MoneyDetails moneydetails={moneydetails} />
        <div className="below-container">
          <div className="add-transaction">
            <h1 className="transaction-heading">Add Transaction</h1>
            <form className="formel" onSubmit={this.additem}>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                value={title}
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
                value={amount}
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
              <select className="dropdown" id="type" onChange={this.typeChange}>
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
            <h1 className="heading">History</h1>
            <div className="historylabels">
              <div className="item-container">
                <p className="p1">title</p>
                <p className="p1">amount</p>
                <p className="p1">type</p>
                <p> </p>
              </div>
              <ul className="list-container">
                {list.map(each => (
                  <TransactionItem
                    itemDetails={each}
                    deletefunc={this.deleteitem}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
