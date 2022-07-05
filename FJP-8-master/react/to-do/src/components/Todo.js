import React, { Component } from "react";
export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currTask: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      currTask: e.target.value,
    });
  };

  handleAddTask = () => {
    this.setState({
      tasks: [...this.state.tasks, { task: this.state.currTask, id:this.state.tasks.length+1 },],
    });
    this.setState({
      currTask: "",
    });
  
  };
  

  handleDelete=(id)=>{
        let narr= this.state.tasks.filter((taskObj)=>{
          return taskObj.id!==id
        }) 
        this.setState({
          tasks: [...narr]
        }) 
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.currTask} onChange={this.handleChange} />
        <button onClick={this.handleAddTask}> ADD Task</button>

        <ul>
          {this.state.tasks.map((taskObj) => {
            return (
              <li>
                <p> {taskObj.task}</p>
                <button onClick={()=>this.handleDelete(taskObj.id)}> delete </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
