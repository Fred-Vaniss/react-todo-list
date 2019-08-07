import React from 'react';
import ls from 'local-storage'
import { TodoItem } from './components'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      todoIndex: 0,
      todoList: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  onChange(event){
    this.setState({
      userInput: event.target.value
    })
  }

  addTodo(event){
    this.setState({
      userInput: '',
      todoIndex: this.state.todoIndex + 1,
      todoList: [...this.state.todoList, {id: this.state.todoIndex, title: this.state.userInput, checked: false}]
    }, () => console.log(this.state.todoList))
    event.preventDefault()
  }

  

  listTodo(){
    return this.state.todoList.map((item) => {
      return(
        <TodoItem key={item.id} onDelete={this.handleDelete} task={ item }/>
      )
    })
  }

  handleDelete(id){
    const array = this.state.todoList
    const index = array.findIndex(i => i.id === id)

    array.splice(index, 1)

    this.setState({
      todoList: array
    })
  }

  render(){
    return (
      <div className="wrapper">
        <h1>Todo list</h1>
        
        <div className="todo-list">
          {this.listTodo()}
          <form className="todo-item">
            <button onClick={this.addTodo.bind(this)}><span role="img" aria-label="add">➕</span></button>
            <input 
              value={this.state.userInput}
              type='text' 
              placeholder='Ajouter une tâche'
              onChange={this.onChange.bind(this)}
              className="todo-input"
            />
          
          </form>
        </div>
      </div>
    );
  }
}

export default App;
