import { Link } from "react-router-dom";

interface BookCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, image, price }) => {
  return (
    <div className="bg-surface border border-gray-100 rounded-2xl p-4 group hover:shadow-md transition duration-300">
      <Link to={`/product/${id}`} className="flex flex-col h-full">
        {/* Image */}
        <div className="w-full h-40 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-sm font-semibold text-textMain line-clamp-2">
          {title}
        </h2>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-md font-medium text-primary">
            ${price.toFixed(2)}
          </p>

          <button
            className="text-xs bg-primary text-white px-3 py-1.5 rounded-lg opacity-100 group-hover:opacity-100 transition"
            onClick={(e) => e.preventDefault()} // prevents navigation when clicking button
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
