import React, { Component } from 'react';

 
 
  var array1 = [1, 4, 9, 16];
    const map1 = array1.map(x => x * 2);  
    console.log(map1);

class Add extends Component{ 
  constructor(){
    super();
    this.state={       
      qty1:0, 
      qty2:0, 
      result:' ',
      numbers : [1, 2, 3, 4, 5],
      names: ['ramya' , 'priya', 'meenu']     
    }
  }
  changeQty1(event){
    var qty1=this.setState({qty1:event.target.value})
  }
  changeQty2(event){
    var qty2=this.setState({qty2:event.target.value})
  } 
  add = (event) =>
  {
    var result=Number(this.state.qty1) +  Number(this.state.qty2)
    this.setState({result:result})
    console.log(this.state.result);
  }
  sub = (event) =>
  {
    var result=Number(this.state.qty1) -  Number(this.state.qty2)
    this.setState({result:result})
    console.log(this.state.result);
  }
    mult = (event) =>
  {
    var result=Number(this.state.qty1) *  Number(this.state.qty2)
    this.setState({result:result})
    console.log(this.state.result);
  }  
  div = (event) =>
  {
    var result=Number(this.state.qty1) /  Number(this.state.qty2)
    this.setState({result:result})
    console.log(this.state.result);
  }
  render(){
    return(
      <div>        
        <h1>Mathematical Funcions</h1>
        <input onChange={this.changeQty1.bind(this)}></input>
        <input onChange={this.changeQty2.bind(this)}></input><br/>        
        <button onClick={this.add.bind(this)}>Add</button>
        <button onClick={this.sub.bind(this)}>Sub</button>
        <button onClick={this.mult.bind(this)}>Mult</button>
        <button onClick={this.div.bind(this)}>Div</button>
        <h5>{this.state.result}</h5>        
        <h1>Map Array</h1>
        {
          this.state.numbers.map((number)=> {
            return <p key={number}>number:{number * 2}</p>
          })
        }
        {
          this.state.names.map((name)=>{
            return <li key={name}>name:{name}</li>
          })
        }        
      </div> 
    );
  }
}

export default Add;