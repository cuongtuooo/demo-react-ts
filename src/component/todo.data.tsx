// [1] [2] [3]  //number[]

interface IProps {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[];
    ownwe: string;
    age: number;
    isDeveloper: boolean;
}

const TodoData = (props: IProps) => {
    const { todos } = props;
    return (
        <div>
            {/* {JSON.stringify(prop)} */}
            {/* {prop.ownwe}
            {prop.age}
            {prop.todos[0].title} */}
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