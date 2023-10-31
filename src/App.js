import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/newproduct">New Product Form</Link>
          </li>
          <li>
            <Link to="/newshop">New Shop Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
