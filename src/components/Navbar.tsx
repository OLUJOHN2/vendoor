import { ShoppingCart, User } from "lucide-react";
import { useCart } from "./CartContext";
import { useUser } from "./UserContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFilter } from "./FilterContext";

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { totalItems } = useCart();
  const { user, logout } = useUser();
  const { setSearchQuery } = useFilter();

  const [userDropdown, setUserDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchQuery(value);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-md h-16 flex items-center justify-between px-6">
      {/* LEFT: menu + logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg border"
        >
          ☰
        </button>

        <Link
          to="/"
          className="text-xl font-bold flex items-center gap-2 text-primary"
        >
          <img src="logo3.png" alt="Vendoor Logo" className="h-10 w-auto" />
          Vendoor
        </Link>
      </div>

      {/* SEARCH */}
      <div className="flex-1 flex justify-center mx-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-xl px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* RIGHT: cart + user */}
      <div className="flex items-center gap-6">
        {/* Cart */}
        <Link to="/cart" className="relative">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* User */}
        <div className="relative">
          <div
            onClick={() => {
              if (!user) {
                navigate("/login");
              } else {
                setUserDropdown(!userDropdown);
              }
            }}
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary"
          >
            <User size={20} />
          </div>

          {userDropdown && user && (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg py-2">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
              <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">
                Orders
              </Link>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
