// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/pizzalogo.png';

// export default function Process() {
//   const [cart, setCart] = useState([]);
//   const [customerNumber, setCustomerNumber] = useState(0);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const saved = localStorage.getItem('cart');
//     const parsedCart = saved ? JSON.parse(saved) : [];
//     setCart(parsedCart);
//     setTotal(parsedCart.reduce((sum, item) => sum + item.quantity * parseInt(item.price), 0));

//     processQueue();
//   }, []);

//   const sendToTelegram = () => {
//     if (cart.length === 0) return;

//     const customerCount = parseInt(localStorage.getItem('customerCount') || '0');
//     const newCustomerNumber = customerCount + 1;
//     setCustomerNumber(newCustomerNumber);
//     localStorage.setItem('customerCount', newCustomerNumber);

//     const botToken = '7537686168:AAFrKzV2hmvW2VFlRD7vH0Ypw46PpRdEDHI'; // token o'zgarmadi
//     const chatId = '@bagat_pizza_n1';  // faqat shu joy o‘zgartirildi (kanal username)

//     const orderList = cart.map((item, index) =>
//       `${index + 1}. 🍽 ${item.name} - ${item.quantity} dona (${item.quantity * item.price} so‘m)`
//     ).join('\n');

//     const message = `🧑 ${newCustomerNumber}-mijozning buyurtmasi:\n\n${orderList}\n\n💰 Umumiy: ${total} so‘m`;

//     const queue = JSON.parse(localStorage.getItem("messageQueue") || "[]");
//     queue.push({ chatId, botToken, message });
//     localStorage.setItem("messageQueue", JSON.stringify(queue));

//     localStorage.removeItem('cart');
//     setCart([]);
//     alert(`${newCustomerNumber}-mijozning buyurtmasi navbatga qo‘shildi!`);

//     processQueue();
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
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ chat_id: chatId, text: message })
//       });

//       queue.shift();
//       localStorage.setItem("messageQueue", JSON.stringify(queue));
//     } catch (err) {
//       console.error("Telegramga yuborishda xatolik:", err);
//     }

//     localStorage.setItem("isSending", "false");

//     if (queue.length > 0) {
//       processQueue();
//     }
//   };

//   const removeOneItem = (id) => {
//     const updated = cart.map(item => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     }).filter(item => item.quantity > 0);

//     setCart(updated);
//     setTotal(updated.reduce((sum, item) => sum + item.quantity * item.price, 0));
//     localStorage.setItem('cart', JSON.stringify(updated));
//   };

//   const addOneItem = (id) => {
//     const updated = cart.map(item => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });

//     setCart(updated);
//     setTotal(updated.reduce((sum, item) => sum + item.quantity * item.price, 0));
//     localStorage.setItem('cart', JSON.stringify(updated));
//   };

//   return (
//     <div className='bg-white min-h-screen pr-4'>
//       <div className="container mx-auto px-4">
//         <div className='text-center items-center justify-between py-8 flex'>
//           <div className='flex items-center gap-2'>
//             <img src={Logo} className='w-[50px]' alt="" />
//             <h1 className='text-[35px] font-medium'>BAGAT PIZZA</h1>
//           </div>
//           <div className='flex gap-[20px]'>
//             <Link to="/" className="text-[25px] px-2 rounded bg-orange-400 text-white">🡰</Link>
//           </div>
//         </div>

//         <div className="bg-white p-5 max-w-xl mx-auto rounded shadow-md border-[5px]">
//           <h2 className="text-xl font-semibold mb-4">🛒 Savatchadagi mahsulotlar</h2>
//           {cart.length === 0 ? (
//             <p>Mahsulot yo‘q</p>
//           ) : (
//             <>
//               <ul className='space-y-3'>
//                 {cart.map((item, index) => (
//                   <li key={item.id} className='border p-3 rounded'>
//                     <div className='flex justify-between items-center'>
//                       <span>{index + 1}. {item.name} x {item.quantity}</span>
//                       <div className="flex items-center gap-3">
//                         <span>{item.price * item.quantity} so‘m</span>
//                         <button
//                           className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                           onClick={() => removeOneItem(item.id)}
//                         >
//                           -1
//                         </button>
//                         <button
//                           className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-green-600"
//                           onClick={() => addOneItem(item.id)}
//                         >
//                           +1
//                         </button>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//               <hr className='my-3' />
//               <div className='flex justify-between font-bold'>
//                 <span>Jami:</span>
//                 <span>{total} so‘m</span>
//               </div>
//               <button
//                 className="w-full mt-5 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
//                 onClick={sendToTelegram}
//               >
//                 Buyurtma berish
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { Component } from 'react'

export default class process extends Component {
  render() {
    return (
      <div>process</div>
    )
  }
}
