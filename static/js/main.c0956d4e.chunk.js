(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,a){t.exports=a(21)},17:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(8),i=a.n(s),c=(a(17),a(10)),r=a(2),l=a(3),d=a(6),u=a(4),h=a(1),p=a(5),m=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).checkItem=function(){var t="";a.state.checked?(a.setState({checked:!1}),t=!1):(a.setState({checked:!0}),t=!0),a.props.onCheck(a.props.task.id,t)},a.state={checked:a.props.task.checked},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-item"},o.a.createElement("button",{className:"check",onClick:this.checkItem},o.a.createElement("span",{role:"img","aria-label":"check"},this.state.checked?"\u2705":"\ud83d\udfe5"))," ",this.props.task.title,o.a.createElement("button",{className:"todo-remove",onClick:this.props.onDelete.bind(this,this.props.task.id)},o.a.createElement("span",{role:"img","aria-label":"remove"},"\u274c")))}}]),e}(o.a.Component),k=a(9),v=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(d.a)(this,Object(u.a)(e).call(this))).state={userInput:"",todoIndex:0,todoList:[]},t.handleDelete=t.handleDelete.bind(Object(h.a)(t)),t.handleCheck=t.handleCheck.bind(Object(h.a)(t)),t}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){var t=JSON.parse(localStorage.getItem("todolist"));Object(k.isNull)(t)||this.setState({todoIndex:t.todoIndex,todoList:t.todoList})}},{key:"onChange",value:function(t){this.setState({userInput:t.target.value})}},{key:"addTodo",value:function(t){var e=this;""!==this.state.userInput?(this.setState({userInput:"",todoIndex:this.state.todoIndex+1,todoList:[].concat(Object(c.a)(this.state.todoList),[{id:this.state.todoIndex,title:this.state.userInput,checked:!1}])},function(){return e.saveData(e.state)}),t.preventDefault()):t.preventDefault()}},{key:"listTodo",value:function(){var t=this;return this.state.todoList.map(function(e){return o.a.createElement(m,{key:e.id,onCheck:t.handleCheck,onDelete:t.handleDelete,task:e})})}},{key:"handleCheck",value:function(t,e){var a=this,n=this.state.todoList,o=n.findIndex(function(e){return e.id===t});n[o].checked=e,this.setState({todoList:n},function(){return a.saveData(a.state)})}},{key:"handleDelete",value:function(t){var e=this,a=this.state.todoList,n=a.findIndex(function(e){return e.id===t});a.splice(n,1),this.setState({todoList:a},function(){return e.saveData(e.state)})}},{key:"saveData",value:function(t){localStorage.setItem("todolist",JSON.stringify(t))}},{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",null,"Todo list"),o.a.createElement("div",{className:"todo-list"},this.listTodo()," ",o.a.createElement("form",{className:"todo-item"},o.a.createElement("button",{onClick:this.addTodo.bind(this)},o.a.createElement("span",{role:"img","aria-label":"add"},"\u2795")),o.a.createElement("input",{value:this.state.userInput,type:"text",placeholder:"Ajouter une t\xe2che",onChange:this.onChange.bind(this),className:"todo-input"}))))}}]),e}(o.a.Component);i.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c0956d4e.chunk.js.map