import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
        setProduct(res.data);
      });
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-primary text-white rounded-lg"
      >
        Back
      </button>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <img
          src={product.images[0]}
          className="w-full h-64 object-contain mb-6"
        />

        <h1 className="text-2xl font-bold mb-3">{product.title}</h1>

        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="flex justify-between">
          <p className="text-lg font-bold text-primary">${product.price}</p>
          <p>⭐ {product.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
