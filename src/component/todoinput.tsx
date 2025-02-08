import { useState } from "react";

interface IProp {
    name?: string
}

const TodoInput = (props: IProp) => {

    const [todo, setTodo] = useState<String>("");
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    const handleClick = () => {
        console.log(todo)
    }

    return (
        <div style={{
            display: "flex", gap: 15, marginBottom: "15px"
        }}>
            {/* <input type="text" onChange={(event) => setTodo(event.target.value)} /> */}
            <input type="text" onChange={handleTextChange} />

            <button onClick={handleClick}>Add Todo</button>
        </div>
    )
}

export default TodoInput;