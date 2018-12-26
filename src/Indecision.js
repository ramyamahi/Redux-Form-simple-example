import React , {Component} from 'react'

class Indecision extends Component {
	constructor(){
		super();
			this.state = {
				options : ['Option1', 'Option2', 'Option3']
			};
		}

randomSelect = () => {
	const randomone = Math.floor(Math.random() * this.state.options.length);
	const option = this.state.options[randomone];
	alert(option);
}
handleRemoveall = () => {
	this.setState({options: [] })
}
handleAdd = () => {
	
	this.setState({options:this.state.options.concat(this.option)})
}
getOption = (e) => {
 this.setState({options: e.target.value})
}
	
render(){
	
	return (
		<div>
			<h1>Indecision</h1>
			<h5>Add and Remove options</h5>
			<button onClick={this.randomSelect.bind(this)}>What should I do?</button>
			<button onClick={this.handleRemoveall.bind(this)}>Remove all</button>
			
			{
				this.state.options.map(option=> (
					 <li key={option}>{option}</li> 
				))
			}
			
			<form>
			<input type='text' onChange={this.getOption.bind(this)}></input>
			<button onClick={this.handleAdd.bind(this)}>Add Option</button>
			</form>
		</div>
		);
	}

}



export default Indecision;