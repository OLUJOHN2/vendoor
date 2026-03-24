import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-background text-textMain min-h-screen">
        {/* Navbar */}
        <Navbar />

        <div className="flex">
          {/* Sidebar (only on large screens) */}
          <aside className="hidden lg:block w-64 bg-surface border-r border-gray-100">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
