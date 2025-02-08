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
            <div>{ownwe}</div>
            <div>{age}</div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div>{item.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;