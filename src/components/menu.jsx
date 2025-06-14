  // import React, { useState, useEffect } from "react";
  // import { Link, useHistory } from "react-router-dom";
  // import Logo from "../assets/pizzalogo.png";

  // export default function Menu({ products }) {
  //   const [counts, setCounts] = useState({});
  //   const [cart, setCart] = useState([]);
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const history = useHistory();

  //   useEffect(() => {
  //     const savedCart = localStorage.getItem("cart");
  //     if (savedCart) setCart(JSON.parse(savedCart));
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }, [cart]);

  //   const increment = (id) => {
  //     const updatedCounts = { ...counts, [id]: (counts[id] || 0) + 1 };
  //     setCounts(updatedCounts);

  //     const product = products.find((p) => p.id === id);
  //     const updatedCart = [...cart];
  //     const index = updatedCart.findIndex((item) => item.id === id);
  //     if (index >= 0) {
  //       updatedCart[index].quantity += 1;
  //     } else {
  //       updatedCart.push({ ...product, quantity: 1 });
  //     }
  //     setCart(updatedCart);
  //   };

  //   const decrement = (id) => {
  //     const currentCount = counts[id] || 0;
  //     if (currentCount === 0) return;

  //     const updatedCounts = { ...counts, [id]: currentCount - 1 };
  //     setCounts(updatedCounts);

  //     const updatedCart = [...cart];
  //     const index = updatedCart.findIndex((item) => item.id === id);
  //     if (index >= 0) {
  //       if (updatedCart[index].quantity > 1) {
  //         updatedCart[index].quantity -= 1;
  //       } else {
  //         updatedCart.splice(index, 1);
  //       }
  //       setCart(updatedCart);
  //     }
  //   };

  //   const totalCount = Object.values(counts).reduce(
  //     (sum, count) => sum + count,
  //     0
  //   );

  //   const filteredProducts = products.filter((product) =>
  //     product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   return (
  //     <div className="bg-[#fff] min-h-screen pb-[80px]">
  //       <div className="container mx-auto px-4">
  //         <div className="text-center items-center justify-between py-8 flex lg:flex-row flex-col gap-3">
  //           <div className="flex items-center gap-2 ">
  //             <img src={Logo} className="w-[50px]" alt="" />
  //             <h1 className="lg:text-[35px] text-[20px] font-medium">
  //               BAGAT PIZZA
  //             </h1>
  //           </div>
  //           <div className="flex gap-[20px]">
  //             <input
  //               type="text"
  //               placeholder="Mahsulot qidirish..."
  //               value={searchTerm}
  //               onChange={(e) => setSearchTerm(e.target.value)}
  //               className="text-[18px] px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
  //             />
  //           </div>
  //         </div>

  //         <div className="flex flex-wrap gap-5 justify-center pb-20">
  //           {filteredProducts.map((product) => (
  //             <div
  //               key={product.id}
  //               className="w-[270px] p-[20px] rounded-[30px] bg-gradient-to-br from-white to-orange-100 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out flex flex-col items-center"
  //             >
  //               <img
  //                 src={product.image}
  //                 alt={product.name}
  //                 className="w-[190px] h-[180px] object-cover rounded-[20px] mb-3 border-4 border-orange-300"
  //               />
  //               <div className="space-y-2 flex flex-col items-center">
  //                 <h3
  //                   className="text-center font-extrabold text-gray-800 max-w-[230px] text-[24px] leading-tight break-words"
  //                   style={{
  //                     fontSize: `clamp(16px, 5vw, 24px)`,
  //                     textWrap: "balance",
  //                   }}
  //                 >
  //                   {product.name}
  //                 </h3>

  //                 <h3 className="text-green-600 font-semibold text-[18px]">
  //                   {product.price} so‘m
  //                 </h3>
  //                 <div className="flex justify-center items-center gap-5 pt-2">
  //                   <button
  //                     onClick={() => decrement(product.id)}
  //                     className="w-[34px] h-[34px] pb-1 text-[24px] font-bold bg-orange-400 hover:bg-orange-500 text-white rounded-full shadow-[0_4px_20px_rgba(255,120,0,0.5)] flex items-center justify-center"
  //                   >
  //                     −
  //                   </button>
  //                   <span className="text-xl font-bold text-gray-700 w-[40px] text-center">
  //                     {counts[product.id] || 0}
  //                   </span>
  //                   <button
  //                     onClick={() => increment(product.id)}
  //                     className="w-[34px] h-[34px] pb-1 text-[24px] font-bold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-[0_4px_20px_rgba(0,200,100,0.5)] flex items-center justify-center"
  //                   >
  //                     +
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>

  //       {/* Fixed Button */}
  //       <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
  //         {totalCount === 0 ? (
  //           <button
  //             disabled
  //             className="bg-gray-400 text-white font-semibold px-12 py-4 text-[18px] rounded shadow-2xl cursor-not-allowed"
  //           >
  //             Savatni ochish
  //           </button>
  //         ) : (
  //           <button
  //             onClick={() => history.push("/cart")}
  //             className="bg-green-600 hover:bg-green-700 text-white font-semibold px-12 py-4 text-[18px] rounded shadow-2xl"
  //           >
  //             Savatni ochish
  //           </button>
  //         )}
  //       </div>
  //     </div>
  //   );
  // }






  // // React imports remain
  // import React, { useState, useEffect } from "react";
  // import { useHistory } from "react-router-dom";
  // import Logo from "../assets/pizzalogo.png";

  // export default function Menu({ products }) {
  //   const [counts, setCounts] = useState({});
  //   const [cart, setCart] = useState([]);
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const history = useHistory();

  //   useEffect(() => {
  //     const savedCart = localStorage.getItem("cart");
  //     if (savedCart) setCart(JSON.parse(savedCart));
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }, [cart]);

  //   const increment = (id) => {
  //     const updatedCounts = { ...counts, [id]: (counts[id] || 0) + 1 };
  //     setCounts(updatedCounts);

  //     const product = products.find((p) => p.id === id);
  //     const updatedCart = [...cart];
  //     const index = updatedCart.findIndex((item) => item.id === id);
  //     if (index >= 0) {
  //       updatedCart[index].quantity += 1;
  //     } else {
  //       updatedCart.push({ ...product, quantity: 1 });
  //     }
  //     setCart(updatedCart);
  //   };

  //   const decrement = (id) => {
  //     const currentCount = counts[id] || 0;
  //     if (currentCount === 0) return;

  //     const updatedCounts = { ...counts, [id]: currentCount - 1 };
  //     setCounts(updatedCounts);

  //     const updatedCart = [...cart];
  //     const index = updatedCart.findIndex((item) => item.id === id);
  //     if (index >= 0) {
  //       if (updatedCart[index].quantity > 1) {
  //         updatedCart[index].quantity -= 1;
  //       } else {
  //         updatedCart.splice(index, 1);
  //       }
  //       setCart(updatedCart);
  //     }
  //   };

  //   const totalCount = Object.values(counts).reduce((sum, count) => sum + count, 0);

  //   const filteredProducts = products.filter((product) =>
  //     product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   return (
  //     <div className="bg-[#fff5e6] bg-[url('/assets/pizza-bg.jpg')] bg-cover bg-fixed min-h-screen pb-28">
  //       <div className="backdrop-blur-sm bg-white/60 min-h-screen">
  //         <div className="container mx-auto px-4">
  //           <header className="flex flex-col lg:flex-row justify-between items-center gap-4 py-6 border-b border-orange-200">
  //             <div className="flex items-center gap-3">
  //               <img src={Logo} className="w-[60px]" alt="Pizza Logo" />
  //               <h1 className="text-3xl lg:text-4xl font-bold text-orange-600 tracking-wider drop-shadow-md">
  //                 BAGAT PIZZA
  //               </h1>
  //             </div>
  //             <input
  //               type="text"
  //               placeholder="Mahsulot qidirish..."
  //               value={searchTerm}
  //               onChange={(e) => setSearchTerm(e.target.value)}
  //               className="w-full max-w-md px-5 py-3 rounded-full border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg bg-white placeholder-orange-400"
  //             />
  //           </header>

  //           <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
  //             {filteredProducts.map((product) => (
  //               <div
  //                 key={product.id}
  //                 className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(255,140,0,0.15)] hover:shadow-[0_15px_50px_rgba(255,140,0,0.25)] transition-all duration-300 p-5 flex flex-col items-center border border-orange-200 hover:scale-105 backdrop-blur-sm"
  //               >
  //                 <img
  //                   src={product.image}
  //                   alt={product.name}
  //                   className="w-48 h-44 object-cover rounded-xl border-4 border-orange-400 mb-3 shadow-md"
  //                 />
  //                 <h3 className="text-center font-bold text-gray-900 text-lg sm:text-xl line-clamp-2">
  //                   {product.name}
  //                 </h3>
  //                 <p className="text-orange-600 font-semibold text-lg mt-1">
  //                   {product.price} so‘m
  //                 </p>
  //                 <div className="flex items-center gap-4 mt-4">
  //                   <button
  //                     onClick={() => decrement(product.id)}
  //                     className="w-10 h-10 text-2xl font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-md flex items-center justify-center"
  //                   >
  //                     −
  //                   </button>
  //                   <span className="text-xl font-bold text-gray-800 w-8 text-center">
  //                     {counts[product.id] || 0}
  //                   </span>
  //                   <button
  //                     onClick={() => increment(product.id)}
  //                     className="w-10 h-10 text-2xl font-bold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md flex items-center justify-center"
  //                   >
  //                     +
  //                   </button>
  //                 </div>
  //               </div>
  //             ))}
  //           </section>
  //         </div>

  //         <footer className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
  //           <button
  //             onClick={() => history.push("/cart")}
  //             disabled={totalCount === 0}
  //             className={`px-16 py-4 text-lg font-semibold rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 
  //               ${
  //                 totalCount === 0
  //                   ? "bg-gray-400 text-white cursor-not-allowed"
  //                   : "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-500 hover:to-red-500 text-white animate-pulse hover:scale-105"
  //               }
  //             `}
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth={1.5}
  //               stroke="currentColor"
  //               className="w-6 h-6"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 14.25a1.125 1.125 0 001.087.835h8.326a1.125 1.125 0 001.087-.835l1.125-4.5a1.125 1.125 0 00-1.087-1.415H6.272m-1.166-4.563L4.5 3.75M10.5 20.25a.75.75 0 100-1.5.75.75 0 000 1.5zm7.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
  //               />
  //             </svg>
  //             Savatni ochish
  //           </button>
  //         </footer>
  //       </div>
  //     </div>
  //   );
  // }





  // React imports remain
  import React, { useState, useEffect } from "react";
  import { useHistory } from "react-router-dom";
  import Logo from "../assets/pizzalogo.png";
  import BG from "../assets/pizza-img-bg.jpg"
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

    const totalCount = Object.values(counts).reduce((sum, count) => sum + count, 0);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div style={{backgroundImage: `url(${BG})`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundAttachment: "fixed",}}className="min-h-screen">
       <div className="backdrop-blur-sm bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 bg-opacity-60 min-h-screen pb-28">
          <div className="container mx-auto px-4">
            <header className="flex flex-col lg:flex-row justify-between items-center gap-4 py-6">
              <div className="flex items-center gap-3">
                <img src={Logo} className="w-[60px]" alt="Pizza Logo" />
                <h1 className="text-4xl font-extrabold text-yellow-400 tracking-widest drop-shadow-[0_0_4px_rgba(255,100,0,0.9)] uppercase">
                  BAGAT PIZZA
                </h1>
              </div>
              <input
                type="text"
                placeholder="Mahsulot qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md px-5 py-3 rounded-full text-lg bg-gradient-to-r from-orange-300 to-orange-500 text-white placeholder-white shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
              {filteredProducts.map((product) => (
                <div
  key={product.id}
  className="bg-white rounded-[30px] p-5 shadow-xl border-2 border-orange-200 flex flex-col items-center transform transition duration-300 hover:scale-[1.05] hover:shadow-2xl relative overflow-hidden"
>
  <div className="absolute top-0 right-0 m-2 bg-orange-200 text-orange-600 text-sm font-bold px-2 py-1 rounded-full shadow-md">
    {product.price} so‘m
  </div>

  <img
    src={product.image}
    alt={product.name}
    className="w-32 h-32 object-cover rounded-full border-4 border-orange-400 shadow-md mb-3"
  />
  <h3 className="text-center font-extrabold text-lg text-gray-800 mb-1 tracking-wide">
    {product.name}
  </h3>

  <div className="flex items-center justify-center mt-3 gap-4">
    <button
      onClick={() => decrement(product.id)}
      className="bg-red-500 hover:bg-red-600 text-white w-9 h-9 rounded-full text-xl font-bold shadow-md transition"
    >
      −
    </button>
    <span className="text-xl font-bold text-orange-600 min-w-[20px] text-center">
      {counts[product.id] || 0}
    </span>
    <button
      onClick={() => increment(product.id)}
      className="bg-green-500 hover:bg-green-600 text-white w-9 h-9 rounded-full text-xl font-bold shadow-md transition"
    >
      +
    </button>
  </div>
</div>

              ))}
            </section>
          </div>

          <footer className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
            <button
              onClick={() => history.push("/cart")}
              disabled={totalCount === 0}
              className={`flex items-center gap-3 px-10 py-3 text-lg font-bold rounded-full shadow-xl transition-all duration-300 ${
                totalCount === 0
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-400 to-orange-500 hover:brightness-110 text-white animate-pulse"
              }`}
            >
              🛒 Savatni ochish
            </button>
          </footer>
        </div>
      </div>
    );
  }
