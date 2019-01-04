import React, { Component } from 'react';
import './App.css';
import { Item, Button,Image, Sidebar, Grid, Header, Segment, Table } from 'semantic-ui-react'

class ExpenseApp extends Component {
  constructor(props){
    super(props);
    this.state={
      income: '',
      detail: '',
      expense: '',
      currentamount: ''
    };
  }
  getIncome = (e) => {
    var income = this.setState({income: e.target.value})
    console.log(this.state.income)
  }
  getExpenseDetail = (e) => {
    var detail = this.setState({income: e.target.value})
    console.log(this.state.detail)
  }
  getDailyExpense = (e) => {
    var expense = this.setState({income: e.target.value})
    console.log(this.state.expense)
  }
  getNow = () => {
    var currentamount = this.setState({currentamount: Number({this.state.income}) - Number({this.state.expense})})
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
          Income of this Month
          <input onChange={this.getIncome.bind(this)} value={this.state.income}></input><br/><br/>
          Daily Expense List
          <input onChange={this.getExpenseDetail.bind(this)} value={this.state.detail}></input>
          <input onChange={this.getDailyExpense.bind(this)} value={this.state.expense}></input><br/><br/>
          Now your Amount
          <input onChange={this.getNow.bind(this)} value={this.state.currentamount}></input>
        </form>
    </div>
 );
}
}

export default ExpenseApp;
