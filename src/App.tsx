import { Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App flex justify-center items-center h-screen flex-col bg-gray-100">
      <h1 className="text-xl">Hello Candidate!</h1>
      <div>Refer to the TASK.md for things to code! 😊</div>
      <nav className="">
        <Link to="/login">Login</Link> | <Link to="/invoices">Invoice</Link>
      </nav>
    </div>
  );
}

export default App;
