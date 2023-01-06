import React, {useState} from 'react';
import './App.css';

import {v1} from 'uuid';
import {TaskType, Todolist_AssArr} from "./Todolist_AssArr";

export type FilterValuesType = "all" | "active" | "completed";
type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType

}

type TasksStateType = {
    [todoListID: string]: Array<TaskType>
}


function App_AssArr() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string, todolistID: string) {
        // let filteredTasks = tasks[todolistID].filter(t => t.id != id);
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t => t.id !== id)});
    }

    function addTask(title: string, todolistID: string) {
        let newTask = {id: v1(), title: title, isDone: false};

        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})


        // let newTasks = [newTask, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean, todolistID: string) {

        setTasks({...tasks, [todolistID]: tasks[todolistID].map(t => t.id === taskId ? {...t, isDone:isDone}:t)})
        //     let task = tasks.find(t => t.id === taskId);
        //     if (task) {
        //         task.isDone = isDone;
        //     }
        //
        //     setTasks([...tasks]);
    }


    function changeFilter(value: FilterValuesType, todolistID: string) {
        setTodolists(todolists.map(t => t.id === todolistID ? {...t, filter: value} : t));
    }

    const CreateMapTodoList = todolists.map(t => {
        let tasksForTodolist = tasks[t.id];

        if (t.filter === "active") {
            tasksForTodolist = tasks[t.id].filter(t => t.isDone === false);
        }
        if (t.filter === "completed") {
            tasksForTodolist = tasks[t.id].filter(t => t.isDone === true);
        }
        return (
            <Todolist_AssArr key={t.id}
                             todolistID={t.id}
                             title={t.title}
                             tasks={tasksForTodolist}
                             removeTask={removeTask}
                             changeFilter={changeFilter}
                             addTask={addTask}
                             changeTaskStatus={changeStatus}
                             filter={t.filter}
            />

        )
    })

    return (
        <div className="App">
            {CreateMapTodoList}
        </div>
    );
}

export default App_AssArr;
