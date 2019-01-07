import React, { Component } from 'react';
import './App.css';
import { Item, Button,Image, Sidebar, Grid, Header, Segment, Table } from 'semantic-ui-react'

class ExpenseApp extends Component {
  constructor(props){
    super(props);
    this.state={
      income: '',
      detail: '',
      expense: [],
      currentamount: []
    };
  }
  getIncome = (e) => {
    var income = this.setState({income: e.target.value})
    console.log(this.state.income)
  }
  getExpenseDetail = (e) => {
    var detail = this.setState({detail: e.target.value})
    console.log(this.state.detail)
  }
  getDailyExpense = (e) => {
    var expense = this.setState({expense: e.target.value})
    console.log(this.state.expense)
  }
  getNow = () => {
    var currentamount = this.setState({currentamount: Number(this.state.income) - Number(this.state.expense)})
    console.log(this.state.currentamount)
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() { 
  console.log(this.state.persons);   
    return (       
      <div>
        <h1>Expense Calculator</h1> 
        <form onSubmit={this.handleSubmit}>
          <b>Income of this Month</b>
          <input onChange={this.getIncome.bind(this)} value={this.state.income}></input><br/><br/>
          <table>
            <tr>
              <td>Expense List</td>
              <td>Amount</td>
              <td>Current amount</td>
            </tr>
            <tr>
              <td>
                <input onChange={this.getExpenseDetail.bind(this)} value={this.state.detail}></input>
              </td>            
              <td>
                <input onChange={this.getDailyExpense.bind(this)} value={this.state.expense}></input>
              </td> 
              <td>           
                <input onChange={this.getNow.bind(this)} value={this.state.currentamount}></input>
                <button onClick={this.getNow.bind(this)}>Now your Amount</button>
              </td>
            </tr>
          </table>
        </form>
    </div>
 );
}
}

export default ExpenseApp;
