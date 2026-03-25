import { useEffect, useState } from "react";
import axios from "axios";
import { useFilter } from "./FilterContext";
import BookCard from "./BookCard";
import { Tally3 } from "lucide-react";

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();

  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const itemsPerPage = 12;

  const isFiltering = selectedCategory || keyword;

  // ✅ Fetch products
  useEffect(() => {
    let url = "";

    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    } else if (selectedCategory) {
      url = `https://dummyjson.com/products/category/${selectedCategory}`;
    } else {
      url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
        (currentPage - 1) * itemsPerPage
      }`;
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [currentPage, keyword, selectedCategory]);

  // ✅ Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, keyword]);

  // ✅ Apply local filters (price + search input)
  const getFilteredProducts = () => {
    let filtered = [...products];

    if (minPrice !== undefined) {
      filtered = filtered.filter((p) => p.price >= minPrice);
    }

    if (maxPrice !== undefined) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }

    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    switch (filter) {
      case "expensive":
        return filtered.sort((a, b) => b.price - a.price);
      case "cheap":
        return filtered.sort((a, b) => a.price - b.price);
      case "popular":
        return filtered.sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  };

  const filteredProducts = getFilteredProducts();

  // Pagination
  const totalProducts = 100;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationButtons = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (2 - (currentPage - 1)));
    }

    if (currentPage + 2 > totalPages) {
      startPage = Math.max(1, startPage - (2 - (totalPages - currentPage)));
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  return (
    <section className="p-8 space-y-6 mt-5">
      {/* Filter Dropdown */}
      <div className="flex justify-between items-center">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="border px-4 py-2 rounded-full flex items-center bg-surface hover:bg-gray-100 transition"
          >
            <Tally3 className="mr-2" />
            {filter === "all"
              ? "Sort"
              : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>

          {dropdownOpen && (
            <div className="absolute bg-white border border-gray-200 rounded-lg mt-2 w-40 shadow-sm">
              <button
                onClick={() => setFilter("cheap")}
                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                Cheapest
              </button>
              <button
                onClick={() => setFilter("expensive")}
                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                Most Expensive
              </button>
              <button
                onClick={() => setFilter("popular")}
                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                Most Popular
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-textSub">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <BookCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
            />
          ))}
        </div>
      )}

      {/* Pagination (only when NOT filtering) */}
      {!isFiltering && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full border bg-surface hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>

          {getPaginationButtons().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-full border ${
                page === currentPage
                  ? "bg-primary text-white"
                  : "bg-surface hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full border bg-surface hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default MainContent;
