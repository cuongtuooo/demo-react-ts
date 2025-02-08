import TodoData from "./todo.data";
import TodoInput from "./todoinput";

const TodoList = () => {
    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Subscribe Youtube HoiDanIT",
            isComplete: true
        },
        {
            id: 3,
            title: "Learn English",
            isComplete: true
        },
    ]


    return (
        <div style={{
            width: "600px",
            border: "1px solid #ccc",
            borderRadius: 10,
            padding: 10,
            margin: "50px auto"
        }}>
            <div style={{
                padding: "10px 0",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                borderBottomStyle: "solid"
            }}>
                My TodoList:
            </div>
            {/* <hr /> */}
            <br />
            <TodoInput
                name="Your todo"
            />
            <TodoData
                todos={todos}
                age={9}
            />
        </div>
    )
}

export default TodoList;
