import React from 'react'

class TodoItem extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            checked: this.props.task.checked
        }
    }

    checkItem = () => {
        let checked = ''
        if (!this.state.checked){
            this.setState({checked: true})
            checked = true
        } else {
            this.setState({checked: false})
            checked = false
        }

        this.props.onCheck(this.props.task.id, checked)
    }

    render(){
        return(
            <div className='todo-item'>
                <button className='check' onClick={this.checkItem}><span role="img" aria-label="check">{this.state.checked ? "✅" : "🟥"}</span></button> { this.props.task.title }
                <button className='todo-remove' onClick={this.props.onDelete.bind(this, this.props.task.id)}><span role="img" aria-label="remove">❌</span></button>
            </div>
        )
    }
}

export default TodoItem