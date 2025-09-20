import Button from "../Button/Button";
import Paragraf from "../Paragraf/Paragraf";
import "./Header.css";

const Header = () => {
  return (
    <header>
      Header
      <button>main</button>
      <Button title="text" bg='blue' />
     <Paragraf>
      Lorem ipsum dolor sit amet.
     </Paragraf>
    </header>
  );
};
export default Header;
