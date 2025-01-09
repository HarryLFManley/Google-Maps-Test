import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>Map Test</h1>
        <Link to={"/"}>
          <p>Search</p>
        </Link>
        <Link to={"/map"}>
          <p>Map</p>
        </Link>
      </header>
    </>
  );
};

export default Header;
