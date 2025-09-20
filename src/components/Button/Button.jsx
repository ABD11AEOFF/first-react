import "./button.css";
const Button = (props) => {
  return (
    <button onClick={props.onClick} style={{ backgroundColor: props.bg }} className="button">
      {props.title === undefined ? "Button" : props.title}
    </button>
  );
};
export default Button;
