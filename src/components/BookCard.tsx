import { Link } from "react-router-dom";

const BookCard = ({ id, title, image, price }: any) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
      <Link to={`/product/${id}`} className="block">
        <div className="h-40 flex items-center justify-center mb-4">
          <img src={image} className="h-full object-contain" />
        </div>

        <h2 className="text-sm font-semibold line-clamp-2">{title}</h2>

        <div className="mt-3 flex justify-between items-center">
          <p className="text-primary font-bold">${price}</p>

          <button
            onClick={(e) => e.preventDefault()}
            className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-lg text-xs"
          >
            Add
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
