import React from 'react';
import { TodoItem } from './components'

class App extends React.Component {
  render(){
    return (
      <div className="wrapper">
        <h1>Todo list</h1>
        <TodoItem task="Faire ceci"/>
        <TodoItem task="Faire cela"/>
      </div>
    );
  }
}

export default App;
