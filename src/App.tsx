import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
      </div>
    </Router>
  );
};

export default App;
