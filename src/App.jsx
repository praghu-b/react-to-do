import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);

    function handleAddTask() {
        if (task.length > 0) {
            setTasks(() => [...tasks, task]);
            setTask('');
        }
    }

    function handleRemoveTask(index) {
        setTasks(() => tasks.filter((_, i) => i !== index));
    }

    function handleDoneTask(index) {
        let completedTask = tasks[index]
        setDoneTasks(() => [...doneTasks, completedTask]);
        setTasks(() => tasks.filter((_, i) => i !== index));
    }

    return (
        <div className="container">
            <h1 className="text-center">To Do List</h1>

            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-8 text-center d-flex">
                    <input type="text" className="form-control my-0 mx-3" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter you're tasks..."></input>
                    <button className="btn btn-primary px-4 m-0" onClick={handleAddTask}>Add</button>
                </div>
                
                <div className="col-12 your-tasks mb-5">
                    <h4 className="mb-3">Your Tasks:</h4>

                    {tasks.length === 0 &&
                            <p className="task fw-bold">No tasks added yet!!!</p>
                    }
                    {tasks.length !== 0 &&

                        tasks.map((t, i) => {

                            return (
                                <div key={i} className="task d-flex justify-content-between align-items-center">
                                    <p className="task-text fw-bold m-0">{t}</p>
                                    <div className="">
                                        <button className="btn btn-success" onClick={() => handleDoneTask(i)}>Done</button>
                                        <button className="btn btn-danger" onClick={() => handleRemoveTask(i)}>Remove</button>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
                
                <div className="col-12 tasks-done">
                    <h4 className="mb-3">Tasks Done:</h4>
                    {doneTasks.length === 0 && <p className="task fw-bold">No tasks completed yet!!!</p>}
                    {doneTasks.length !== 0 && 
                    
                        doneTasks.map((t, i) => {

                            return (
                                <div key={i} className="task d-inline-block">
                                    <p className="fw-bold m-0">{t}</p>
                                </div>
                            )
                        })}
                </div>
            </div>

        </div>
    )
}

export default App;