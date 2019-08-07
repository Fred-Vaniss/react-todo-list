import React from 'react';
import { TodoItem, TodoList } from './components'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    }
  }

  onChange(event){
    this.setState({
      userInput: event.target.value
    })
  }

  addTodo(event){
    event.preventDefault()
  }

  render(){
    const listTodo = TodoList.map((task) => {
      return(
        <TodoItem key={task.id} task={ task }/>
      )
    })

    return (
      <div className="wrapper">
        <h1>Todo list</h1>
        <form>
          <input 
            value={this.state.userInput}
            type='text' 
            placeholder='Ajouter une tâche'
            onChange={this.onChange.bind(this)}
          /> <br/>
          <button onClick={this.addTodo.bind(this)}>Ajouter</button>
        </form>
        <div className="todo-list">
          {listTodo}
        </div>
      </div>
    );
  }
}

export default App;
