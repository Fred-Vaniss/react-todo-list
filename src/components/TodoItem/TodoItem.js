import React from 'react'

class TodoItem extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            checked: this.props.task.checked    // Reprend l'état check reçu en props
        }
    }

    checkItem = () => {
        let checked = ''                        // Création d'une variable check à part
        if (!this.state.checked){               // Changement de l'état check
            this.setState({checked: true})
            checked = true
        } else {
            this.setState({checked: false})
            checked = false
        }

        this.props.onCheck(this.props.task.id, checked) // Change l'état check dans la variable props
    }

    render(){
        return(
            <div className='todo-item'>
              {/*                         Appelle la fonction pour changer l'état                       Affiche soit la case verte ou rouge selon l'état */}
                <button className={`check ${this.state.checked ? 'checked' : 'unchecked'}`} onClick={this.checkItem}><span role="img" aria-label="check">{this.state.checked ? "✔" : "✘"}</span></button> { this.props.task.title }
              {/*                               Appelle l'événement sur app.js avec l'ID en tant qu'argument */}
                <button className='todo-remove' onClick={this.props.onDelete.bind(this, this.props.task.id)}><span role="img" aria-label="remove">❌</span></button>
            </div>
        );
    }
}

export default TodoItem