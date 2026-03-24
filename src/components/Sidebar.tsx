import { useState, useEffect } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
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
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();

        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category)),
        );

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleResetFilters = () => {
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-64 p-6 bg-surface border-r border-gray-100 h-full">
      {/* Title */}
      <h2 className="text-lg font-semibold text-textMain mb-6">Filters</h2>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-textSub mb-3">Categories</h3>

        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-sm rounded-full border transition ${
                selectedCategory === category
                  ? "bg-primary text-white border-primary"
                  : "bg-gray-100 text-textMain hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-textSub mb-3">Price Range</h3>

        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={(e) =>
              setMinPrice(
                e.target.value ? parseFloat(e.target.value) : undefined,
              )
            }
            className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="number"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={(e) =>
              setMaxPrice(
                e.target.value ? parseFloat(e.target.value) : undefined,
              )
            }
            className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Keywords */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-textSub mb-3">
          Popular Searches
        </h3>

        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <button
              key={index}
              onClick={() => setKeyword(keyword)}
              className="px-3 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={handleResetFilters}
        className="w-full py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Sidebar;
