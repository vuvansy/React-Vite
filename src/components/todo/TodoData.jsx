/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const TodoData = (props) => {
    const { todoList } = props;

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">>> check map: ", item, index);
                return (
                    <div className="todo-item">
                        <div> {item.name}</div>
                        <button>Delete</button>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoData;
