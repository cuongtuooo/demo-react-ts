interface IProps {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[];
    ownwe?: string;
    age?: number;
    isDeveloper?: boolean;
}


const TodoData = (props: IProps) => {
    const { todos, ownwe = "default", age = "default age" } = props;
    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div style={{ padding: "10px 0" }} >
                            {item.id}-{item.title}
                            &nbsp;&nbsp;&nbsp;&nbsp;<button>delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;