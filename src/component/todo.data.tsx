// [1] [2] [3]  //number[]

// dung type ở trường hợp thuộc tính đơn lẻ, interface cho đối tượng
type TColor = "yeallow" | "red" | "blue";
const mau: TColor = "red";

// có thể kết hợp cả 2

interface IColor {
    colors: TColor;
}

const color: IColor = { colors: "yeallow" };

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

type TProps = {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[];
    ownwe: string;
    age: number;
    isDeveloper: boolean;
}

const TodoData = (props: TProps) => {
    const { todos, ownwe, age } = props;
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

            {age} {ownwe} {mau}
        </div>
    )
}

export default TodoData;