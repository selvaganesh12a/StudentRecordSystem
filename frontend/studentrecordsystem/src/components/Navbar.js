import "../styles/navbar.module.css";
function Navbar(props) {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => props.setMode("view")}>View Students</button>
        </li>
        <li>
          <button onClick={() => props.setMode("add")}>Add Student</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
