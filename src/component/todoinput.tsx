import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface IProp {
    name?: string;
    // setListTodo: (value: ITodo[]) => void;
    addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: IProp) => {
    const { addNewTodo } = props;
    const [todo, setTodo] = useState<string>("");
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        if (!todo) {
            alert("emtytodo")
            return;
        }
        addNewTodo({
            id: randomInteger(1, 10000),
            title: todo,
            isComplete: false
        });
        setTodo("");
    }

    return (
        <div style={{
            display: "flex", gap: 15, marginBottom: "15px"
        }}>
            {/* <input type="text" onChange={(event) => setTodo(event.target.value)} /> */}
            <input type="text" onChange={handleTextChange} value={todo} />

            <button onClick={handleClick}>Add Todo</button>
        </div>
    )
}

export default TodoInput;