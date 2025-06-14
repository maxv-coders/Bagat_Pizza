import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/pizzalogo.png";

export default function Menu({ products }) {
  const [counts, setCounts] = useState({});
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increment = (id) => {
    const updatedCounts = { ...counts, [id]: (counts[id] || 0) + 1 };
    setCounts(updatedCounts);

    const product = products.find((p) => p.id === id);
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === id);
    if (index >= 0) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
  };

  const decrement = (id) => {
    const currentCount = counts[id] || 0;
    if (currentCount === 0) return;

    const updatedCounts = { ...counts, [id]: currentCount - 1 };
    setCounts(updatedCounts);

    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === id);
    if (index >= 0) {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
    }
  };

  const totalCount = Object.values(counts).reduce(
    (sum, count) => sum + count,
    0
  );

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#fff] min-h-screen pb-[80px]">
      <div className="container mx-auto px-4">
        <div className="text-center items-center justify-between py-8 flex lg:flex-row flex-col gap-3">
          <div className="flex items-center gap-2 ">
            <img src={Logo} className="w-[50px]" alt="" />
            <h1 className="lg:text-[35px] text-[20px] font-medium">
              BAGAT PIZZA
            </h1>
          </div>
          <div className="flex gap-[20px]">
            <input
              type="text"
              placeholder="Mahsulot qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-[18px] px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-5 justify-center pb-20">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[270px] p-[20px] rounded-[30px] bg-gradient-to-br from-white to-orange-100 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[190px] h-[180px] object-cover rounded-[20px] mb-3 border-4 border-orange-300"
              />
              <div className="space-y-2 flex flex-col items-center">
                <h3
                  className="text-center font-extrabold text-gray-800 max-w-[230px] text-[24px] leading-tight break-words"
                  style={{
                    fontSize: `clamp(16px, 5vw, 24px)`,
                    textWrap: "balance",
                  }}
                >
                  {product.name}
                </h3>

                <h3 className="text-green-600 font-semibold text-[18px]">
                  {product.price} so‘m
                </h3>
                <div className="flex justify-center items-center gap-5 pt-2">
                  <button
                    onClick={() => decrement(product.id)}
                    className="w-[34px] h-[34px] pb-1 text-[24px] font-bold bg-orange-400 hover:bg-orange-500 text-white rounded-full shadow-[0_4px_20px_rgba(255,120,0,0.5)] flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="text-xl font-bold text-gray-700 w-[40px] text-center">
                    {counts[product.id] || 0}
                  </span>
                  <button
                    onClick={() => increment(product.id)}
                    className="w-[34px] h-[34px] pb-1 text-[24px] font-bold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-[0_4px_20px_rgba(0,200,100,0.5)] flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Button */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        {totalCount === 0 ? (
          <button
            disabled
            className="bg-gray-400 text-white font-semibold px-12 py-4 text-[18px] rounded shadow-2xl cursor-not-allowed"
          >
            Savatni ochish
          </button>
        ) : (
          <button
            onClick={() => history.push("/cart")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-12 py-4 text-[18px] rounded shadow-2xl"
          >
            Savatni ochish
          </button>
        )}
      </div>
    </div>
  );
}
