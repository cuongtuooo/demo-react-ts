interface IProps {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[];
    ownwe?: string;
    age?: number;
    isDeveloper?: boolean;
    deleteTodo: (value: number) => void;
}


const TodoData = (props: IProps) => {
    const { deleteTodo, todos, ownwe = "default", age = "default age" } = props;

    const handleDelete = (id: number) => {
        deleteTodo(id);
    }
    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div style={{ padding: "10px 0" }} >
                            {item.id}-{item.title}
                            &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => handleDelete(item.id)}>delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;