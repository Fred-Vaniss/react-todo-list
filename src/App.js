import React from 'react';
import ls from 'local-storage'
import { TodoItem } from './components'
import { isNull } from 'util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      todoIndex: 0,
      todoList: []
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  componentWillMount () {
    const storage = JSON.parse(localStorage.getItem('todolist'))
    if (!isNull(storage)){
      this.setState({
        todoIndex: storage.todoIndex,
        todoList: storage.todoList
      })
    }

    console.log(storage)
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
    }, () => this.saveData(this.state))
    event.preventDefault()
    console.log(this.state)
    

  }

  listTodo(){
    return this.state.todoList.map((item) => {
      return(
        <TodoItem key={item.id} onCheck={this.handleCheck} onDelete={this.handleDelete} task={ item }/>
      )
    })
  }

  handleCheck(id, state){
    console.log("check")
    console.log({id})
    // const array = this.state.todoList
    // const index = array.findIndex(i => i.id === id)

    // array[index].checked = state
  }

  handleDelete(id){
    const array = this.state.todoList
    const index = array.findIndex(i => i.id === id)

    array.splice(index, 1)

    this.setState({
      todoList: array
    }, () => this.saveData(this.state))

    
  }

  saveData(data){
    localStorage.setItem('todolist', JSON.stringify(data))
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
