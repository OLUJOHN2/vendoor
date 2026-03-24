import { ShoppingCart, User } from "lucide-react";
import { useCart } from "./CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface NavbarProps {
  products: Product[];
  onSearchResults: (results: Product[]) => void;
}

const Navbar: React.FC<NavbarProps> = ({ products, onSearchResults }) => {
  const { totalItems } = useCart();
  const [userDropdown, setUserDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      onSearchResults(products); // show all if input is empty
      return;
    }

    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase()),
    );
    onSearchResults(filtered);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-surface shadow sticky top-0 z-50">
      {/* Left: Logo */}
      <Link to="/" className="text-xl font-bold text-textMain">
        Vendoor
      </Link>

      {/* Center: Search */}
      <div className="flex-1 flex justify-center mx-6">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-110 max-w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Right: Cart + User */}
      <div className="flex items-center gap-6">
        {/* Cart */}
        <Link to="/cart" className="relative cursor-pointer">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* User Icon */}
        <div className="relative">
          <div
            onClick={() => setUserDropdown(!userDropdown)}
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary transition"
          >
            <User size={20} className="text-textSub" />
          </div>

          {userDropdown && (
            <div className="absolute right-0 mt-2 w-44 bg-surface border border-gray-200 rounded-lg shadow-lg py-2 z-50">
              <Link
                to="/profile"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
              >
                Profile
              </Link>
              <Link
                to="/orders"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
              >
                Orders
              </Link>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition">
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
