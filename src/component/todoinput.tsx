interface IProp {
    name?: string
}

const TodoInput = (props: IProp) => {
    const { name = "please type your todo" } = props;
    return (
        <div style={{
            display: "flex", gap: 15, marginBottom: "15px"
        }}>
            <input type="text" value={name} />
            <button>Add Todo</button>
        </div>
    )
}

export default TodoInput;