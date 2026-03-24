import { ShoppingCart, User, Search } from "lucide-react";
import { useFilter } from "./FilterContext";

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useFilter();

  return (
    <header className="bg-surface border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary tracking-tight cursor-pointer">
          Vendoor
        </h1>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-[40%] bg-gray-100 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-primary transition">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-2 w-full bg-transparent outline-none text-sm"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Account */}
          <button className="p-2 rounded-lg hover:bg-gray-100 transition">
            <User size={20} />
          </button>

          {/* Cart */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1.5 rounded-full">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
