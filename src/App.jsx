import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
    const [todoList, setTodoList] = useState([]);

    const randomIntFromInterval = (min, max) => {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 10000),
            name: name,
        };

        setTodoList([...todoList, newTodo]);
    };

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew addNewTodo={addNewTodo} />
            {todoList.length > 0 ? (
                <TodoData todoList={todoList} />
            ) : (
                <div className="todo-image">
                    <img src={reactLogo} className="logo" />
                </div>
            )}
        </div>
    );
};

export default App;
