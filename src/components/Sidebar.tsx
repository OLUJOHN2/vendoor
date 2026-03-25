import { useState, useEffect } from "react";
import { useFilter } from "./FilterContext";

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const {
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>(["apple", "watch", "fashion", "shoes"]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const unique = Array.from(
          new Set(data.products.map((p: any) => p.category)),
        );
        setCategories(unique as string[]);
      });
  }, []);

  return (
    <div className="p-6 h-full overflow-y-auto">
      <button onClick={onClose} className="lg:hidden mb-4">
        ✕ Close
      </button>

      <h2 className="text-lg font-semibold mb-6 mt-15">Filters</h2>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-sm mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-sm rounded-full ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-primary hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-sm mb-3">Price</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={(e) =>
              setMinPrice(e.target.value ? Number(e.target.value) : undefined)
            }
            className="w-full bg-gray-100 rounded-lg px-3 py-2"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : undefined)
            }
            className="w-full bg-gray-100 rounded-lg px-3 py-2"
          />
        </div>
      </div>

      {/* Keywords */}
      <div className="mb-8">
        <h3 className="text-sm mb-3">Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map((k, i) => (
            <button
              key={i}
              onClick={() => setKeyword(k)}
              className="px-3 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-primary hover:text-white"
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          setSelectedCategory("");
          setMinPrice(undefined);
          setMaxPrice(undefined);
          setKeyword("");
        }}
        className="w-full py-2 bg-primary text-white rounded-lg"
      >
        Reset
      </button>
    </div>
  );
};

export default Sidebar;
