import Paragraf from "../Paragraf/Paragraf";

const List = (props) => {
  return (gid
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" />
          <p style={{textDecoration:'line-throught'}}>
            {todo.todo}
            {todo.id}
          </p>
          <button onClick={() => props.deleteFn(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
