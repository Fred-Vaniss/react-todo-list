import React from 'react'

class TodoItem extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            checked: this.props.task.checked
        }
    }

    checkItem = () => {
        if (!this.state.checked){
            this.setState({checked: true})
        } else {
            this.setState({checked: false})
        }
    }

    render(){
        return(
            <div className='todo-item'>
                <span className='check' role="img" aria-label="check" onClick={this.checkItem}>{this.state.checked ? "✅" : "🟥"}</span> { this.props.task.title }
            </div>
        )
    }
}

export default TodoItem