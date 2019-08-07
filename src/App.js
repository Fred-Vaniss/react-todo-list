///////////////////////////////////////////
//                                       //
//  Todolist par Frédérick Van Isschot   //
//  https://github.com/Fred-Vaniss       //
//                                       //
///////////////////////////////////////////

import React from 'react';
import { TodoItem } from './components'
import { isNull } from 'util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',  // Champ de texte
      todoIndex: 0,   // Indexe de nouvelles entrées
      todoList: []    // Liste des tâches
    }
    this.handleDelete = this.handleDelete.bind(this)  // Bind des événements vers les components
    this.handleCheck = this.handleCheck.bind(this)    
  }

  // Vérification si il y a des données en cache, chargement de ceux-ci si elles existent
  componentWillMount () {
    const storage = JSON.parse(localStorage.getItem('todolist'))
    if (!isNull(storage)){
      this.setState({
        todoIndex: storage.todoIndex,
        todoList: storage.todoList
      })
    }
  }

  // Evénement lorsqu'on tape dans le champ de texte
  onChange(event){
    this.setState({
      userInput: event.target.value // On change l'état de la variable
    })
  }

  // Evénement lorsq'un valide l'ajout d'un événement
  addTodo(event){
    if (this.state.userInput !== ''){
      // On modifie l'état de la classe
      this.setState({
        userInput: '',                          // On vide le champ de texte
        todoIndex: this.state.todoIndex + 1,    // On incrémente le compteur d'indexe
        // On ajoute un nouvel objet au tableau de la liste des tâches avec l'ID, le texte entrée et la valeur "checked" en false par défaut
        todoList: [...this.state.todoList, {id: this.state.todoIndex, title: this.state.userInput, checked: false}]
      }, () => this.saveData(this.state))
      event.preventDefault()    // On empêche la page de se recharger a cause du formulaire
    } else {
      event.preventDefault()
    }
  }

  // Fonction qui va lire la liste et les afficher sur la page avec un map
  listTodo(){
    return this.state.todoList.map((item) => {
      return(
        <TodoItem key={item.id} onCheck={this.handleCheck} onDelete={this.handleDelete} task={ item }/>
        // onCheck et onDelete: va pouvoir communiquer l'évélement depuis le component en envoyant par les props
      )
    })
  }

  // Gestion de l'événement lorsqu'on coche la case depuis le component
  handleCheck(id, state){
    let array = this.state.todoList                   // On stocke le tableau de la liste des tâche dans une variable
    const index = array.findIndex(i => i.id === id)   // On cherche dans quel index se trouve notre ID concernée

    array[index].checked = state                      // On applique le changement de variable dans notre tableau

    this.setState({ 
      todoList: array                                 // On applique les changement faites au tableau dans la state
    }, () => this.saveData(this.state))               // On sauvegarde les changements aux données locale
  }
  
  // Gestion de l'événement lorsqu'on supprime une tâche
  handleDelete(id){
    let array = this.state.todoList                   // On stocke le tableau de la liste des tâche dans une variable
    const index = array.findIndex(i => i.id === id)   // On cherche dans quel index se trouve notre ID concernée

    array.splice(index, 1)                            // On supprime l'élément du tableau concerné

    this.setState({
      todoList: array                                 // On applique les changement faites au tableau dans la state
    }, () => this.saveData(this.state))               // On sauvegarde les changements aux données locale

    
  }

  // Fonction pour sauvegarder les données localement
  saveData(data){
    localStorage.setItem('todolist', JSON.stringify(data))
  }

  // Rendu de l'application
  render(){
    return (
      <div className="wrapper">
        <h1>Todo list</h1>
        
        <div className="todo-list">
          {this.listTodo()} {/* Appelle la fonction qui liste la liste des tâche dans la page*/}
          <form className="todo-item">
            <button onClick={this.addTodo.bind(this)}><span role="img" aria-label="add">➕</span></button>
            <input 
              value={this.state.userInput}          // Reprend la valeur de l'état userInput
              type='text' 
              placeholder='Ajouter une tâche'
              onChange={this.onChange.bind(this)}   // Communique avec l'événement onChange qui change l'état userInput
              className="todo-input"
            />
          
          </form>
        </div>
      </div>
    );
  }
}

export default App;
