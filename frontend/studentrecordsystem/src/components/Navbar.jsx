import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> | <Link to="/studentlist">Student List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
