







// import React, { useState, useEffect } from "react";
// import Logo from "../assets/pizzalogo.png";

// const categories = ["all", "burger", "ichimlik", "desert", "combo", "pizza", "hod-dog"];

// export default function Menu() {
//   const [products, setProducts] = useState([]);
//   const [counts, setCounts] = useState({});
//   const [cart, setCart] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("all");
//   const [showCart, setShowCart] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     const storedProducts = localStorage.getItem("products");
//     if (storedProducts) {
//       const parsed = JSON.parse(storedProducts).map((p) => ({
//         ...p,
//         category: p.category || "unknown",
//       }));
//       setProducts(parsed);
//     }
//   }, []);

//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       const parsedCart = JSON.parse(savedCart);
//       setCart(parsedCart);
//       const countsObj = {};
//       parsedCart.forEach((item) => {
//         countsObj[item.id] = item.quantity;
//       });
//       setCounts(countsObj);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Countlarni boshqarish
//   const increment = (id) => {
//     const updatedCounts = { ...counts, [id]: (counts[id] || 0) + 1 };
//     setCounts(updatedCounts);

//     const product = products.find((p) => p.id === id);
//     if (!product) return;

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
//   const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

//   const filteredProducts = products.filter((product) => {
//     const matchCategory = category === "all" || product.category === category;
//     const matchSearch = product.name?.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchCategory && matchSearch;
//   });

//   const sendToTelegram = async () => {
//     if (cart.length === 0) return alert("Savat bo‘sh!");

//     const customerCount = parseInt(localStorage.getItem("customerCount") || "0");
//     const newCustomerNumber = customerCount + 1;
//     localStorage.setItem("customerCount", newCustomerNumber);

//     const botToken = "7537686168:AAFrKzV2hmvW2VFlRD7vH0Ypw46PpRdEDHI"; 
//     const chatId = "@bagat_pizza_n1"; 

//     const orderList = cart
//       .map(
//         (item, idx) =>
//           `${idx + 1}. 🍽 ${item.name} - ${item.quantity} dona (${item.quantity * item.price} so‘m)`
//       )
//       .join("\n");

//     const message = `🧑 ${newCustomerNumber}-mijozning buyurtmasi:\n\n${orderList}\n\n💰 Umumiy: ${totalPrice} so‘m`;

//     const queue = JSON.parse(localStorage.getItem("messageQueue") || "[]");
//     queue.push({ chatId, botToken, message });
//     localStorage.setItem("messageQueue", JSON.stringify(queue));

//     setCart([]);
//     setCounts({});
//     localStorage.removeItem("cart");
//     alert(`${newCustomerNumber}-mijozning buyurtmasi navbatga qo‘shildi!`);

//     processQueue();
//     setShowCart(false);
//   };

//   const processQueue = async () => {
//     const isSending = localStorage.getItem("isSending") === "true";
//     if (isSending) return;

//     let queue = JSON.parse(localStorage.getItem("messageQueue") || "[]");
//     if (queue.length === 0) return;

//     localStorage.setItem("isSending", "true");

//     const { chatId, botToken, message } = queue[0];

//     try {
//       await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ chat_id: chatId, text: message }),
//       });

//       queue.shift();
//       localStorage.setItem("messageQueue", JSON.stringify(queue));
//     } catch (error) {
//       console.error("Telegramga yuborishda xatolik:", error);
//     }

//     localStorage.setItem("isSending", "false");

//     if (queue.length > 0) {
//       processQueue();
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen pb-36">
//       <header className="bg-red-600 text-white py-5 px-6 flex flex-col sm:flex-row justify-between items-center shadow-lg gap-4">
//         <div className="flex items-center gap-4">
//           <img src={Logo} className="w-14" alt="Logo" />
//           <h1 className="text-3xl font-extrabold uppercase tracking-wider whitespace-nowrap">Bagat Pizza</h1>
//         </div>
//         <input
//           type="text"
//           placeholder="Izlash..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="rounded-full px-5 py-2 text-lg w-full max-w-xs sm:max-w-md md:max-w-lg text-black placeholder-gray-500 shadow-inner"
//         />
//       </header>
//       <div className="flex flex-wrap justify-center gap-3 py-4 bg-gray-100">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setCategory(cat)}
//             className={`px-4 py-2 rounded-full font-bold text-sm ${
//               category === cat
//                 ? "bg-red-600 text-white"
//                 : "bg-white border border-red-300 text-red-600"
//             }`}
//           >
//             {cat.toUpperCase()}
//           </button>
//         ))}
//       </div>
//       <main className="container mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white border rounded-xl shadow hover:shadow-xl p-5 flex flex-col items-center cursor-pointer"
//               onClick={() => setSelectedProduct(product)}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-md mb-3"
//               />
//               <h3 className="text-lg font-bold text-center">{product.name}</h3>
//               <p className="text-red-600 font-bold text-lg">{product.price} so‘m</p>
//               <div className="flex gap-4 mt-3">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     decrement(product.id);
//                   }}
//                   className="w-10 h-10 bg-gray-300 pb-1  hover:bg-gray-400 rounded-full text-xl font-bold"
//                 >
//                   −
//                 </button>
//                 <span className="text-lg font-bold">{counts[product.id] || 0}</span>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     increment(product.id);
//                   }}
//                   className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white pb-1   rounded-full text-xl font-bold"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Cart Footer */}
//       <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md py-4 flex justify-between px-6 items-center">
//         <span className="font-bold text-lg text-gray-700">
//           Jami: {totalPrice.toLocaleString()} so‘m
//         </span>
//         <div className="flex gap-3">
//           <button
//             onClick={() => setShowCart(true)}
//             disabled={totalCount === 0}
//             className={`px-6 py-3 rounded-full text-white font-bold transition ${
//               totalCount === 0
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-red-600 hover:bg-red-700"
//             }`}
//           >
//             🛒 Savat ({totalCount})
//           </button>
//         </div>
//       </footer>

//       {/* Cart Modal with Close (X) button */}
//       {showCart && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
//             <button
//               onClick={() => setShowCart(false)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
//               aria-label="Close cart"
//             >
//               ×
//             </button>

//             <h2 className="text-xl font-bold mb-4">Savat</h2>
//             {cart.length === 0 ? (
//               <p>Mahsulot yo‘q</p>
//             ) : (
//               <>
//                 <ul className="space-y-3 max-h-72 overflow-y-auto">
//                   {cart.map((item, idx) => (
//                     <li key={item.id} className="flex justify-between items-center border-b pb-2">
//                       <div>
//                         <p className="font-semibold">{idx + 1}. {item.name}</p>
//                         <p>
//                           {item.quantity} x {item.price.toLocaleString()} so‘m ={" "}
//                           {(item.quantity * item.price).toLocaleString()} so‘m
//                         </p>
//                       </div>
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => decrement(item.id)}
//                           className="bg-gray-300 hover:bg-gray-400 rounded px-3 py-1"
//                         >
//                           -1
//                         </button>
//                         <button
//                           onClick={() => increment(item.id)}
//                           className="bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1"
//                         >
//                           +1
//                         </button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="mt-4 flex justify-between font-bold text-lg">
//                   <span>Jami:</span>
//                   <span>{totalPrice.toLocaleString()} so‘m</span>
//                 </div>
//                 <button
//                   onClick={sendToTelegram}
//                   className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold"
//                 >
//                   Buyurtma berish
//                 </button>
//                 <button
//                   onClick={() => setShowCart(false)}
//                   className="mt-2 w-full border border-gray-400 rounded py-2"
//                 >
//                   Bekor qilish
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Selected Product Modal with Close (X) button */}
//       {selectedProduct && (
//         <div
//           onClick={() => setSelectedProduct(null)}
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40 cursor-pointer"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
//           >
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
//               aria-label="Close product details"
//             >
//               ×
//             </button>

//             <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.name}
//               className="w-full h-48 sm:h-64 object-cover rounded mb-4"
//             />
//             <p className="text-lg font-semibold text-red-600 mb-2">{selectedProduct.price} so‘m</p>
//             <p className="mb-4">{selectedProduct.description}</p>
//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={() => {
//                   increment(selectedProduct.id);
//                   setSelectedProduct(null);
//                 }}
//                 className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold"
//               >
//                 Savatga qo‘shish
//               </button>
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="border border-gray-400 px-6 py-2 rounded"
//               >
//                 Bekor qilish
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }












// import React, { useState, useEffect } from "react";
// import Logo from "../assets/pizzalogo.png";

// const categories = ["all", "burger", "ichimlik", "desert", "combo", "pizza", "hod-dog"];

// export default function Menu() {
//   const [products, setProducts] = useState([]);
//   const [counts, setCounts] = useState({});
//   const [cart, setCart] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("all");
//   const [showCart, setShowCart] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     const storedProducts = localStorage.getItem("products");
//     if (storedProducts) {
//       const parsed = JSON.parse(storedProducts).map((p) => ({
//         ...p,
//         category: p.category || "unknown",
//       }));
//       setProducts(parsed);
//     }
//   }, []);

//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       const parsedCart = JSON.parse(savedCart);
//       setCart(parsedCart);
//       const countsObj = {};
//       parsedCart.forEach((item) => {
//         countsObj[item.id] = item.quantity;
//       });
//       setCounts(countsObj);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const increment = (id) => {
//     const updatedCounts = { ...counts, [id]: (counts[id] || 0) + 1 };
//     setCounts(updatedCounts);

//     const product = products.find((p) => p.id === id);
//     if (!product) return;

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

//   const clearCart = () => {
//     setCart([]);
//     setCounts({});
//     localStorage.removeItem("cart");
//     setShowCart(false);
//   };

//   const totalCount = Object.values(counts).reduce((sum, count) => sum + count, 0);
//   const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

//   const filteredProducts = products.filter((product) => {
//     const matchCategory = category === "all" || product.category === category;
//     const matchSearch = product.name?.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchCategory && matchSearch;
//   });

//   const sendToTelegram = async () => {
//     if (cart.length === 0) return alert("Savat bo‘sh!");

//     const customerCount = parseInt(localStorage.getItem("customerCount") || "0");
//     const newCustomerNumber = customerCount + 1;
//     localStorage.setItem("customerCount", newCustomerNumber);

//     const botToken = "7537686168:AAFrKzV2hmvW2VFlRD7vH0Ypw46PpRdEDHI";
//     const chatId = "@bagat_pizza_n1";

//     const orderList = cart
//       .map(
//         (item, idx) =>
//           `${idx + 1}. 🍽 ${item.name} - ${item.quantity} dona (${item.quantity * item.price} so‘m)`
//       )
//       .join("\n");

//     const message = `🧑 ${newCustomerNumber}-mijozning buyurtmasi:\n\n${orderList}\n\n💰 Umumiy: ${totalPrice} so‘m`;

//     const queue = JSON.parse(localStorage.getItem("messageQueue") || "[]");
//     queue.push({ chatId, botToken, message });
//     localStorage.setItem("messageQueue", JSON.stringify(queue));

//     setCart([]);
//     setCounts({});
//     localStorage.removeItem("cart");
//     alert(`${newCustomerNumber}-mijozning buyurtmasi navbatga qo‘shildi!`);

//     processQueue();
//     setShowCart(false);
//   };

//   const processQueue = async () => {
//     const isSending = localStorage.getItem("isSending") === "true";
//     if (isSending) return;

//     let queue = JSON.parse(localStorage.getItem("messageQueue") || "[]");
//     if (queue.length === 0) return;

//     localStorage.setItem("isSending", "true");

//     const { chatId, botToken, message } = queue[0];

//     try {
//       await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ chat_id: chatId, text: message }),
//       });

//       queue.shift();
//       localStorage.setItem("messageQueue", JSON.stringify(queue));
//     } catch (error) {
//       console.error("Telegramga yuborishda xatolik:", error);
//     }

//     localStorage.setItem("isSending", "false");

//     if (queue.length > 0) {
//       processQueue();
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen pb-36">
//       <header className="bg-red-600 text-white py-5 px-6 flex flex-col sm:flex-row justify-between items-center shadow-lg gap-4">
//         <div className="flex items-center gap-4">
//           <img src={Logo} className="w-14" alt="Logo" />
//           <h1 className="text-3xl font-extrabold uppercase tracking-wider whitespace-nowrap">Bagat Pizza</h1>
//         </div>
//         <input
//           type="text"
//           placeholder="Izlash..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="rounded-full px-5 py-2 text-lg w-full max-w-xs sm:max-w-md md:max-w-lg text-black placeholder-gray-500 shadow-inner"
//         />
//       </header>
//       <div className="flex flex-wrap justify-center gap-3 py-4 bg-gray-100">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setCategory(cat)}
//             className={`px-4 py-2 rounded-full font-bold text-sm ${
//               category === cat
//                 ? "bg-red-600 text-white"
//                 : "bg-white border border-red-300 text-red-600"
//             }`}
//           >
//             {cat.toUpperCase()}
//           </button>
//         ))}
//       </div>
//       <main className="container mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white border rounded-xl shadow hover:shadow-xl p-5 flex flex-col items-center cursor-pointer"
//               onClick={() => setSelectedProduct(product)}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-md mb-3"
//               />
//               <h3 className="text-lg font-bold text-center">{product.name}</h3>
//               <p className="text-red-600 font-bold text-lg">{product.price} so‘m</p>
//               <div className="flex gap-4 mt-3">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     decrement(product.id);
//                   }}
//                   className="w-10 h-10 bg-gray-300 pb-1 hover:bg-gray-400 rounded-full text-xl font-bold"
//                 >
//                   −
//                 </button>
//                 <span className="text-lg font-bold">{counts[product.id] || 0}</span>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     increment(product.id);
//                   }}
//                   className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white pb-1 rounded-full text-xl font-bold"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md py-4 flex justify-between px-6 items-center">
//         <span className="font-bold text-lg text-gray-700">
//           Jami: {totalPrice.toLocaleString()} so‘m
//         </span>
//         <div className="flex gap-3">
//           <button
//             onClick={() => setShowCart(true)}
//             disabled={totalCount === 0}
//             className={`px-6 py-3 rounded-full text-white font-bold transition ${
//               totalCount === 0
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-red-600 hover:bg-red-700"
//             }`}
//           >
//             🛒 Savat ({totalCount})
//           </button>
//           <button
//             onClick={clearCart}
//             disabled={totalCount === 0}
//             className={`px-6 py-3 rounded-full font-bold transition ${
//               totalCount === 0
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-gray-600 hover:bg-gray-700 text-white"
//             }`}
//           >
//             Tozalash
//           </button>
//         </div>
//       </footer>

//       {showCart && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
//             <button
//               onClick={() => setShowCart(false)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
//               aria-label="Close cart"
//             >
//               ×
//             </button>

//             <h2 className="text-xl font-bold mb-4">Savat</h2>
//             {cart.length === 0 ? (
//               <p>Mahsulot yo‘q</p>
//             ) : (
//               <>
//                 <ul className="space-y-3 max-h-72 overflow-y-auto">
//                   {cart.map((item, idx) => (
//                     <li key={item.id} className="flex justify-between items-center border-b pb-2">
//                       <div>
//                         <p className="font-semibold">{idx + 1}. {item.name}</p>
//                         <p>
//                           {item.quantity} x {item.price.toLocaleString()} so‘m ={" "}
//                           {(item.quantity * item.price).toLocaleString()} so‘m
//                         </p>
//                       </div>
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => decrement(item.id)}
//                           className="bg-gray-300 hover:bg-gray-400 rounded px-3 py-1"
//                         >
//                           -1
//                         </button>
//                         <button
//                           onClick={() => increment(item.id)}
//                           className="bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1"
//                         >
//                           +1
//                         </button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="mt-4 flex justify-between font-bold text-lg">
//                   <span>Jami:</span>
//                   <span>{totalPrice.toLocaleString()} so‘m</span>
//                 </div>
//                 <button
//                   onClick={sendToTelegram}
//                   className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold"
//                 >
//                   Buyurtma berish
//                 </button>
//                 <button
//                   onClick={() => setShowCart(false)}
//                   className="mt-2 w-full border border-gray-400 rounded py-2"
//                 >
//                   Bekor qilish
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {selectedProduct && (
//         <div
//           onClick={() => setSelectedProduct(null)}
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40 cursor-pointer"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
//           >
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
//               aria-label="Close product details"
//             >
//               ×
//             </button>

//             <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.name}
//               className="w-full h-48 sm:h-64 object-cover rounded mb-4"
//             />
//             <p className="text-lg font-semibold text-red-600 mb-2">{selectedProduct.price} so‘m</p>
//             <p className="mb-4">{selectedProduct.description}</p>
//             <div className="flex gap-4 justify-center items-center mb-4">
//               <button
//                 onClick={() => decrement(selectedProduct.id)}
//                 className="w-10 h-10 bg-gray-300 pb-1 hover:bg-gray-400 rounded-full text-xl font-bold"
//               >
//                 −
//               </button>
//               <span className="text-lg font-bold">{counts[selectedProduct.id] || 0}</span>
//               <button
//                 onClick={() => increment(selectedProduct.id)}
//                 className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white pb-1 rounded-full text-xl font-bold"
//               >
//                 +
//               </button>
//             </div>
//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={() => {
//                   increment(selectedProduct.id);
//                   setSelectedProduct(null);
//                 }}
//                 className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold"
//               >
//                 Savatga qo‘shish
//               </button>
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="border border-gray-400 px-6 py-2 rounded"
//               >
//                 Bekor qilish
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






import React, { useState, useEffect } from "react";
import Logo from "../assets/pizzalogo.png";

const categories = ["all", "burger", "ichimlik", "desert", "combo", "pizza", "hod-dog"];

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState({});
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const parsed = JSON.parse(storedProducts).map((p) => ({
        ...p,
        category: p.category || "unknown",
      }));
      setProducts(parsed);
    }
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      const countsObj = {};
      parsedCart.forEach((item) => {
        countsObj[item.id] = item.quantity;
      });
      setCounts(countsObj);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increment = (id) => {
    const updatedCounts = { ...counts, [id]: (counts[id] || 0) + 1 };
    setCounts(updatedCounts);

    const product = products.find((p) => p.id === id);
    if (!product) return;

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

  const clearCart = () => {
    setCart([]);
    setCounts({});
    localStorage.removeItem("cart");
    setShowCart(false);
  };

  const totalCount = Object.values(counts).reduce((sum, count) => sum + count, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const filteredProducts = products.filter((product) => {
    const matchCategory = category === "all" || product.category === category;
    const matchSearch = product.name?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const sendToTelegram = async () => {
    if (cart.length === 0) return alert("Savat bo‘sh!");

    const customerCount = parseInt(localStorage.getItem("customerCount") || "0");
    const newCustomerNumber = customerCount + 1;
    localStorage.setItem("customerCount", newCustomerNumber);

    const botToken = "7537686168:AAFrKzV2hmvW2VFlRD7vH0Ypw46PpRdEDHI";
    const chatId = "@bagat_pizza_n1";

    const orderList = cart
      .map(
        (item, idx) =>
          `${idx + 1}. 🍽 ${item.name} - ${item.quantity} dona (${item.quantity * item.price} so‘m)`
      )
      .join("\n");

    const message = `🧑 ${newCustomerNumber}-mijozning buyurtmasi:\n\n${orderList}\n\n💰 Umumiy: ${totalPrice} so‘m`;

    const queue = JSON.parse(localStorage.getItem("messageQueue") || "[]");
    queue.push({ chatId, botToken, message });
    localStorage.setItem("messageQueue", JSON.stringify(queue));

    setCart([]);
    setCounts({});
    localStorage.removeItem("cart");
    alert(`${newCustomerNumber}-mijozning buyurtmasi navbatga qo‘shildi!`);

    processQueue();
    setShowCart(false);
  };

  const processQueue = async () => {
    const isSending = localStorage.getItem("isSending") === "true";
    if (isSending) return;

    let queue = JSON.parse(localStorage.getItem("messageQueue") || "[]");
    if (queue.length === 0) return;

    localStorage.setItem("isSending", "true");

    const { chatId, botToken, message } = queue[0];

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      });

      queue.shift();
      localStorage.setItem("messageQueue", JSON.stringify(queue));
    } catch (error) {
      console.error("Telegramga yuborishda xatolik:", error);
    }

    localStorage.setItem("isSending", "false");

    if (queue.length > 0) {
      processQueue();
    }
  };

  return (
    <div className="bg-white min-h-screen flex">
      {/* Main content */}
      <div className="flex-1 pb-36 md:mr-80">
        <header className="bg-red-600 text-white py-5 px-6 flex flex-col sm:flex-row justify-between items-center shadow-lg gap-4">
          <div className="flex items-center gap-4">
            <img src={Logo} className="w-14" alt="Logo" />
            <h1 className="text-3xl font-extrabold uppercase tracking-wider whitespace-nowrap">Bagat Pizza</h1>
          </div>
          <input
            type="text"
            placeholder="Izlash..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-full px-5 py-2 text-lg w-full max-w-xs sm:max-w-md md:max-w-lg text-black placeholder-gray-500 shadow-inner"
          />
        </header>
        <div className="flex flex-wrap justify-center gap-3 py-4 bg-gray-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full font-bold text-sm ${
                category === cat
                  ? "bg-red-600 text-white"
                  : "bg-white border border-red-300 text-red-600"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
        <main className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-xl shadow hover:shadow-xl p-5 flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-bold text-center">{product.name}</h3>
                <p className="text-red-600 font-bold text-lg">{product.price} so‘m</p>
                <div className="flex gap-4 mt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      decrement(product.id);
                    }}
                    className="w-10 h-10 bg-gray-300 pb-1 hover:bg-gray-400 rounded-full text-xl font-bold"
                  >
                    −
                  </button>
                  <span className="text-lg font-bold">{counts[product.id] || 0}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      increment(product.id);
                    }}
                    className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white pb-1 rounded-full text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer for mobile screens */}
        <footer className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-md py-4 flex justify-between px-6 items-center">
          <span className="font-bold text-lg text-gray-700">
            Jami: {totalPrice.toLocaleString()} so‘m
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => setShowCart(true)}
              disabled={totalCount === 0}
              className={`px-6 py-3 rounded-full text-white font-bold transition ${
                totalCount === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              🛒 Savat ({totalCount})
            </button>
            <button
              onClick={clearCart}
              disabled={totalCount === 0}
              className={`px-6 py-3 rounded-full font-bold transition ${
                totalCount === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-600 hover:bg-gray-700 text-white"
              }`}
            >
              Tozalash
            </button>
          </div>
        </footer>

        {/* Cart modal for mobile screens */}
        {showCart && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
              <button
                onClick={() => setShowCart(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
                aria-label="Close cart"
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-4">Savat</h2>
              {cart.length === 0 ? (
                <p>Mahsulot yo‘q</p>
              ) : (
                <>
                  <ul className="space-y-3 max-h-72 overflow-y-auto">
                    {cart.map((item, idx) => (
                      <li key={item.id} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <p className="font-semibold">{idx + 1}. {item.name}</p>
                          <p>
                            {item.quantity} x {item.price.toLocaleString()} so‘m ={" "}
                            {(item.quantity * item.price).toLocaleString()} so‘m
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => decrement(item.id)}
                            className="bg-gray-300 hover:bg-gray-400 rounded px-3 py-1"
                          >
                            -1
                          </button>
                          <button
                            onClick={() => increment(item.id)}
                            className="bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1"
                          >
                            +1
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-between font-bold text-lg">
                    <span>Jami:</span>
                    <span>{totalPrice.toLocaleString()} so‘m</span>
                  </div>
                  <button
                    onClick={sendToTelegram}
                    className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold"
                  >
                    Buyurtma berish
                  </button>
                  <button
                    onClick={() => setShowCart(false)}
                    className="mt-2 w-full border border-gray-400 rounded py-2"
                  >
                    Bekor qilish
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Cart panel for desktop screens */}
      <div className="hidden md:block fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-40 p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Savat</h2>
        {cart.length === 0 ? (
          <p>Mahsulot yo‘q</p>
        ) : (
          <>
            <ul className="space-y-3">
              {cart.map((item, idx) => (
                <li key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-semibold">{idx + 1}. {item.name}</p>
                    <p>
                      {item.quantity} x {item.price.toLocaleString()} so‘m ={" "}
                      {(item.quantity * item.price).toLocaleString()} so‘m
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between font-bold text-lg">
              <span>Jami:</span>
              <span>{totalPrice.toLocaleString()} so‘m</span>
            </div>
            <button
              onClick={sendToTelegram}
              className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold"
            >
              Buyurtma berish
            </button>
            <button
              onClick={clearCart}
              className="mt-2 w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded font-bold"
            >
              Tozalash
            </button>
          </>
        )}
      </div>

      {/* Product details modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
              aria-label="Close product details"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 sm:h-64 object-cover rounded mb-4"
            />
            <p className="text-lg font-semibold text-red-600 mb-2">{selectedProduct.price} so‘m</p>
            <p className="mb-4">{selectedProduct.description}</p>
            <div className="flex gap-4 justify-center items-center mb-4">
              <button
                onClick={() => decrement(selectedProduct.id)}
                className="w-10 h-10 bg-gray-300 pb-1 hover:bg-gray-400 rounded-full text-xl font-bold"
              >
                −
              </button>
              <span className="text-lg font-bold">{counts[selectedProduct.id] || 0}</span>
              <button
                onClick={() => increment(selectedProduct.id)}
                className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white pb-1 rounded-full text-xl font-bold"
              >
                +
              </button>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  increment(selectedProduct.id);
                  setSelectedProduct(null);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold"
              >
                Savatga qo‘shish
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="border border-gray-400 px-6 py-2 rounded"
              >
                Bekor qilish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}