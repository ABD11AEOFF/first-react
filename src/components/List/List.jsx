const List = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => props.toggleFn(todo.id)}
          />
          <p
            style={{
              display: "inline-block",
              marginLeft: "8px",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.todo}
          </p>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => props.deleteFn(todo.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
