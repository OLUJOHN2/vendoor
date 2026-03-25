import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { CartProvider } from "./components/CartContext";
import { UserProvider } from "./components/UserContext";
import { FilterProvider } from "./components/FilterContext";

import "./index.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <FilterProvider>
            <div className="flex flex-col min-h-screen">
              {/* Navbar fixed */}
              <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

              <div className="flex flex-1">
                {/* Sidebar for large screens */}
                <aside className="hidden lg:block w-64 bg-surface border-r border-gray-100">
                  <Sidebar onClose={() => setSidebarOpen(false)} />
                </aside>

                {/* Mobile sidebar */}
                {sidebarOpen && (
                  <aside className="fixed inset-0 z-40 bg-black bg-opacity-30 lg:hidden">
                    <div className="absolute left-0 top-0 w-64 h-full bg-surface shadow-lg p-6">
                      <Sidebar onClose={() => setSidebarOpen(false)} />
                      <button
                        onClick={() => setSidebarOpen(false)}
                        className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
                      >
                        Close
                      </button>
                    </div>
                  </aside>
                )}

                {/* Main content */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-background pt-16">
                  {/* pt-16 = Navbar height */}
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
