import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import "./form.css";
import { useEffect, useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodo = {
      id: todos.length + 1,
      todo: value + "@gmail.com",
      completed: false,   // ✅ қосу керек
    };
    setTodos([...todos, newTodo]);
    setValue("");
  }

  function deleteFn(id) {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  }

  function toggleFn(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  async function getProducts() {
    console.log("produktiler aldi");
  }

  useEffect(() => {
    getProducts();
  }, [todos]);

  return (
    <div className="form">
      <h1 className="h1">Gmail Poshta</h1>
      <Input
        setValue={setValue}
        value={value}
        tayp="text"
        lable="todo"
        pl=".....@gmail.com"
      />
      <input type="password" />
      <Button onClick={addTodo} />
      <List todos={todos} deleteFn={deleteFn} toggleFn={toggleFn} />
    </div>
  );
};
export default Form;
