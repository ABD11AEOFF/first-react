import "./Input.css";
const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.label}> {props.label} </label>
      <input
        onChange={(event) => props.setValue(event.target.value)}
        value={props.value}
        type={props.type}
        id={props.label}
        placeholder={props.pl}
      />
    </div>
  );
};

export default Input;
