import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer"; // <-- import Footer
import { CartProvider } from "./components/CartContext";
import { UserProvider } from "./components/UserContext";
import { FilterProvider } from "./components/FilterContext";
import "./index.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <FilterProvider>
            <div className="bg-background text-textMain flex flex-col min-h-screen">
              {/* Navbar */}
              <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

              {/* Content & Sidebar */}
              <div className="flex flex-1">
                {/* Overlay */}
                {isSidebarOpen && (
                  <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                  />
                )}

                {/* Sidebar */}
                <aside
                  className={`
                    fixed top-0 left-0 h-full w-64 bg-surface z-50
                    transform transition-transform duration-300
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:static lg:translate-x-0 lg:block
                  `}
                >
                  <Sidebar onClose={() => setIsSidebarOpen(false)} />
                </aside>

                {/* Main */}
                <main className="flex-1 p-6 lg:p-8">
                  <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/login" element={<LoginPage />} />
                  </Routes>
                </main>
              </div>

              {/* Footer */}
              <Footer />
            </div>
          </FilterProvider>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
