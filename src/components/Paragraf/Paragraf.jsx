import "./Paragraf.css";

const Paragraf = (props) => {
    console.log(props)
  return <p>{props.children}</p>;
};
export default Paragraf;
