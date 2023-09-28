import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>header</p>
      <Link to="/">Top</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
