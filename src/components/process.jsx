// // // // // // // // import React from 'react'
// // // // // // // // import { Link } from 'react-router-dom'

// // // // // // // // export default function Home() {
// // // // // // // //     return (
// // // // // // // //         <div className='bg-orange-400 '>
// // // // // // // //             <div className="container">
// // // // // // // //                 <div className='text-center justify-center py-8 flex gap-10'>
// // // // // // // //                     <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
// // // // // // // //                     <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
// // // // // // // //                 </div>
// // // // // // // //                 <div className=''>
                    
// // // // // // // //                 </div>
// // // // // // // //             </div>
// // // // // // // //         </div>
// // // // // // // //     )
// // // // // // // // }




















// // // // // // import React, { useEffect, useState } from 'react'
// // // // // // import { Link } from 'react-router-dom'

// // // // // // export default function Process() {
// // // // // //   const [cart, setCart] = useState([])

// // // // // //   useEffect(() => {
// // // // // //     const saved = localStorage.getItem('cart')
// // // // // //     setCart(saved ? JSON.parse(saved) : [])
// // // // // //   }, [])

// // // // // //   const total = cart.reduce((sum, item) => sum + item.quantity * parseInt(item.price), 0)

// // // // // //   return (
// // // // // //     <div className='bg-orange-400 min-h-screen'>
// // // // // //       <div className="container mx-auto px-4">
// // // // // //         <div className='text-center justify-center py-8 flex gap-10'>
// // // // // //           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
// // // // // //           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
// // // // // //         </div>
// // // // // //         <div className="bg-white p-5 max-w-xl mx-auto rounded shadow">
// // // // // //           <h2 className="text-xl font-semibold mb-4">🛒 Savatchadagi mahsulotlar</h2>
// // // // // //           {cart.length === 0 ? (
// // // // // //             <p>Mahsulot yo‘q</p>
// // // // // //           ) : (
// // // // // //             <ul className='space-y-3'>
// // // // // //               {cart.map(item => (
// // // // // //                 <li key={item.id} className='border p-3 rounded'>
// // // // // //                   <div className='flex justify-between'>
// // // // // //                     <span>{item.name} x {item.quantity}</span>
// // // // // //                     <span>{item.price * item.quantity} so‘m</span>
// // // // // //                   </div>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //               <hr className='my-3' />
// // // // // //               <div className='flex justify-between font-bold'>
// // // // // //                 <span>Jami:</span>
// // // // // //                 <span>{total} so‘m</span>
// // // // // //               </div>
// // // // // //             </ul>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

















// // // // // import React, { useEffect, useState } from 'react'
// // // // // import { Link } from 'react-router-dom'

// // // // // export default function Process() {
// // // // //   const [cart, setCart] = useState([])

// // // // //   useEffect(() => {
// // // // //     const saved = localStorage.getItem('cart')
// // // // //     setCart(saved ? JSON.parse(saved) : [])
// // // // //   }, [])

// // // // //   const total = cart.reduce((sum, item) => sum + item.quantity * parseInt(item.price), 0)

// // // // //   const clearCart = () => {
// // // // //     setCart([])
// // // // //     localStorage.removeItem('cart')
// // // // //   }

// // // // //   return (
// // // // //     <div className='bg-orange-400 min-h-screen'>
// // // // //       <div className="container mx-auto px-4">
// // // // //         <div className='text-center justify-center py-8 flex gap-10'>
// // // // //           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
// // // // //           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
// // // // //         </div>

// // // // //         <div className="bg-white p-5 max-w-xl mx-auto rounded shadow">
// // // // //           <h2 className="text-xl font-semibold mb-4">🛒 Savatchadagi mahsulotlar</h2>

// // // // //           {cart.length === 0 ? (
// // // // //             <p>Mahsulot yo‘q</p>
// // // // //           ) : (
// // // // //             <>
// // // // //               <ul className='space-y-3'>
// // // // //                 {cart.map(item => (
// // // // //                   <li key={item.id} className='border p-3 rounded'>
// // // // //                     <div className='flex justify-between'>
// // // // //                       <span>{item.name} x {item.quantity}</span>
// // // // //                       <span>{item.price * item.quantity} so‘m</span>
// // // // //                     </div>
// // // // //                   </li>
// // // // //                 ))}
// // // // //               </ul>
// // // // //               <hr className='my-3' />
// // // // //               <div className='flex justify-between font-bold text-lg'>
// // // // //                 <span>Jami:</span>
// // // // //                 <span>{total} so‘m</span>
// // // // //               </div>
// // // // //               <button
// // // // //                 onClick={clearCart}
// // // // //                 className='mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600'
// // // // //               >
// // // // //                 Savatni tozalash
// // // // //               </button>
// // // // //             </>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }





















// // // // import React, { useEffect, useState } from 'react'
// // // // import { Link } from 'react-router-dom'

// // // // export default function Process() {
// // // //   const [cart, setCart] = useState([])

// // // //   useEffect(() => {
// // // //     const saved = localStorage.getItem('cart')
// // // //     setCart(saved ? JSON.parse(saved) : [])
// // // //   }, [])

// // // //   const total = cart.reduce((sum, item) => sum + item.quantity * parseInt(item.price), 0)

// // // //   const sendOrderToTelegram = async () => {
// // // //     const botToken = 'YOUR_BOT_TOKEN' // Replace with your bot token
// // // //     const chatId = 'YOUR_CHAT_ID'     // Replace with your chat ID

// // // //     if (cart.length === 0) {
// // // //       alert("Savatcha bo‘sh")
// // // //       return
// // // //     }

// // // //     const orderText = cart.map(item =>
// // // //       `📦 ${item.name} x ${item.quantity} = ${item.quantity * item.price} so‘m`
// // // //     ).join('\n') + `\n\n🧾 Jami: ${total} so‘m`

// // // //     const url = `https://api.telegram.org/bot${botToken}/sendMessage`
// // // //     const data = {
// // // //       chat_id: chatId,
// // // //       text: orderText
// // // //     }

// // // //     try {
// // // //       const response = await fetch(url, {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify(data)
// // // //       })
// // // //       if (response.ok) {
// // // //         alert('Buyurtma yuborildi ✅')
// // // //         localStorage.removeItem('cart')
// // // //         setCart([])
// // // //       } else {
// // // //         alert('Xatolik yuz berdi ❌')
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Telegramga yuborishda xatolik:', error)
// // // //       alert('Telegramga yuborishda xatolik')
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className='bg-orange-400 min-h-screen'>
// // // //       <div className="container mx-auto px-4">
// // // //         <div className='text-center justify-center py-8 flex gap-10'>
// // // //           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
// // // //           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
// // // //         </div>
// // // //         <div className="bg-white p-5 max-w-xl mx-auto rounded shadow">
// // // //           <h2 className="text-xl font-semibold mb-4">🛒 Savatchadagi mahsulotlar</h2>
// // // //           {cart.length === 0 ? (
// // // //             <p>Mahsulot yo‘q</p>
// // // //           ) : (
// // // //             <>
// // // //               <ul className='space-y-3'>
// // // //                 {cart.map(item => (
// // // //                   <li key={item.id} className='border p-3 rounded'>
// // // //                     <div className='flex justify-between'>
// // // //                       <span>{item.name} x {item.quantity}</span>
// // // //                       <span>{item.price * item.quantity} so‘m</span>
// // // //                     </div>
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //               <hr className='my-3' />
// // // //               <div className='flex justify-between font-bold'>
// // // //                 <span>Jami:</span>
// // // //                 <span>{total} so‘m</span>
// // // //               </div>

// // // //               {/* Order Button */}
// // // //               <button
// // // //                 onClick={sendOrderToTelegram}
// // // //                 className="mt-5 w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
// // // //               >
// // // //                 🛍 Buyurtma berish
// // // //               </button>
// // // //             </>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }























// // // import React, { useEffect, useState } from 'react'
// // // import { Link } from 'react-router-dom'

// // // export default function Process() {
// // //   const [cart, setCart] = useState([])

// // //   useEffect(() => {
// // //     const saved = localStorage.getItem('cart')
// // //     setCart(saved ? JSON.parse(saved) : [])
// // //   }, [])

// // //   useEffect(() => {
// // //     localStorage.setItem('cart', JSON.stringify(cart))
// // //   }, [cart])

// // //   const total = cart.reduce((sum, item) => sum + item.quantity * parseInt(item.price), 0)

// // //   const deleteItem = (id) => {
// // //     const updatedCart = cart.filter(item => item.id !== id)
// // //     setCart(updatedCart)
// // //   }

// // //   const sendOrderToTelegram = async () => {
// // //     const botToken = 'YOUR_BOT_TOKEN' // Replace with your bot token
// // //     const chatId = 'YOUR_CHAT_ID'     // Replace with your chat ID

// // //     if (cart.length === 0) {
// // //       alert("Savatcha bo‘sh")
// // //       return
// // //     }

// // //     const orderText = cart.map(item =>
// // //       `📦 ${item.name} x ${item.quantity} = ${item.quantity * item.price} so‘m`
// // //     ).join('\n') + `\n\n🧾 Jami: ${total} so‘m`

// // //     const url = `https://api.telegram.org/bot${botToken}/sendMessage`
// // //     const data = {
// // //       chat_id: chatId,
// // //       text: orderText
// // //     }

// // //     try {
// // //       const response = await fetch(url, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(data)
// // //       })
// // //       if (response.ok) {
// // //         alert('Buyurtma yuborildi ✅')
// // //         localStorage.removeItem('cart')
// // //         setCart([])
// // //       } else {
// // //         alert('Xatolik yuz berdi ❌')
// // //       }
// // //     } catch (error) {
// // //       console.error('Telegramga yuborishda xatolik:', error)
// // //       alert('Telegramga yuborishda xatolik')
// // //     }
// // //   }

// // //   return (
// // //     <div className='bg-orange-400 min-h-screen'>
// // //       <div className="container mx-auto px-4">
// // //         <div className='text-center justify-center py-8 flex gap-10'>
// // //           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
// // //           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
// // //         </div>
// // //         <div className="bg-white p-5 max-w-xl mx-auto rounded shadow">
// // //           <h2 className="text-xl font-semibold mb-4">🛒 Savatchadagi mahsulotlar</h2>
// // //           {cart.length === 0 ? (
// // //             <p>Mahsulot yo‘q</p>
// // //           ) : (
// // //             <>
// // //               <ul className='space-y-3'>
// // //                 {cart.map(item => (
// // //                   <li key={item.id} className='border p-3 rounded'>
// // //                     <div className='flex justify-between items-center'>
// // //                       <div>
// // //                         <span>{item.name} x {item.quantity}</span>
// // //                         <div className="text-sm text-gray-500">{item.price * item.quantity} so‘m</div>
// // //                       </div>
// // //                       <button
// // //                         onClick={() => deleteItem(item.id)}
// // //                         className='text-red-500 hover:text-red-700 font-bold text-xl'
// // //                         title="O‘chirish"
// // //                       >
// // //                         &times;
// // //                       </button>
// // //                     </div>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //               <hr className='my-3' />
// // //               <div className='flex justify-between font-bold'>
// // //                 <span>Jami:</span>
// // //                 <span>{total} so‘m</span>
// // //               </div>

// // //               <button
// // //                 onClick={sendOrderToTelegram}
// // //                 className="mt-5 w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
// // //               >
// // //                 🛍 Buyurtma berish
// // //               </button>
// // //             </>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }
























// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';

// // export default function Process() {
// //   const [cart, setCart] = useState([]);

// //   useEffect(() => {
// //     const saved = localStorage.getItem('cart');
// //     setCart(saved ? JSON.parse(saved) : []);
// //   }, []);

// //   const total = cart.reduce((sum, item) => sum + item.quantity * parseInt(item.price), 0);

// //   const removeItem = (id) => {
// //     const updatedCart = cart.filter(item => item.id !== id);
// //     setCart(updatedCart);
// //     localStorage.setItem('cart', JSON.stringify(updatedCart));
// //   };

// //   const sendOrder = async () => {
// //     const text = cart.map(item =>
// //       `${item.name} x ${item.quantity} = ${item.quantity * item.price} so‘m`
// //     ).join('\n') + `\n\nJami: ${total} so‘m`;

// //     const TOKEN = '7537686168:AAFrKzV2hmvW2VFlRD7vH0Ypw46PpRdEDHI';
// //     const CHAT_ID = '6536432455';

// //     await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ chat_id: CHAT_ID, text })
// //     });

// //     alert('Buyurtma yuborildi!');
// //     setCart([]);
// //     localStorage.removeItem('cart');
// //   };

// //   return (
// //     <div className='bg-orange-400 min-h-screen'>
// //       <div className="container mx-auto px-4">
// //         <div className='text-center justify-center py-8 flex gap-10'>
// //           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
// //           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
// //         </div>
// //         <div className="bg-white p-5 max-w-xl mx-auto rounded shadow">
// //           <h2 className="text-xl font-semibold mb-4">🛒 Savatchadagi mahsulotlar</h2>
// //           {cart.length === 0 ? (
// //             <p>Mahsulot yo‘q</p>
// //           ) : (
// //             <>
// //               <ul className='space-y-3'>
// //                 {cart.map(item => (
// //                   <li key={item.id} className='border p-3 rounded'>
// //                     <div className='flex justify-between'>
// //                       <span>{item.name} x {item.quantity}</span>
// //                       <span>{item.price * item.quantity} so‘m</span>
// //                     </div>
// //                     <button
// //                       className='text-red-500 underline text-sm'
// //                       onClick={() => removeItem(item.id)}
// //                     >
// //                       O‘chirish
// //                     </button>
// //                   </li>
// //                 ))}
// //               </ul>
// //               <hr className='my-3' />
// //               <div className='flex justify-between font-bold'>
// //                 <span>Jami:</span>
// //                 <span>{total} so‘m</span>
// //               </div>
// //               <button
// //                 className='w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded'
// //                 onClick={sendOrder}
// //               >
// //                 Buyurtma berish
// //               </button>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
























// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Process() {
//   const [cart, setCart] = useState([]);
//   const [customerNumber, setCustomerNumber] = useState(1);

//   useEffect(() => {
//     const saved = localStorage.getItem('cart');
//     setCart(saved ? JSON.parse(saved) : []);

//     const customerCount = parseInt(localStorage.getItem('customerCount') || '0');
//     const newCount = customerCount + 1;
//     setCustomerNumber(newCount);
//     localStorage.setItem('customerCount', newCount);
//   }, []);

//   const deleteItem = (id) => {
//     const newCart = cart.filter(item => item.id !== id);
//     setCart(newCart);
//     localStorage.setItem('cart', JSON.stringify(newCart));
//   };

//   const total = cart.reduce((sum, item) => sum + item.quantity * parseInt(item.price), 0);

//   const sendOrder = async () => {
//     if (cart.length === 0) {
//       alert('Savatchada mahsulot yo‘q.');
//       return;
//     }

//     const now = new Date();
//     const time = now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
//     const date = now.toLocaleDateString('uz-UZ');

//     const orderText = cart.map((item, index) =>
//       `${index + 1}) ${item.name} x ${item.quantity} = ${item.quantity * item.price} so‘m`
//     ).join('\n');

//     const message =
//       `🧑‍💼 ${customerNumber}-mijozning buyurtmasi\n` +
//       `🕒 Sana: ${date}, Vaqti: ${time}\n\n` +
//       `${orderText}\n\n` +
//       `💰 Jami: ${total} so‘m`;

//     const TOKEN = '7537686168:AAFrKzV2hmvW2VFlRD7vH0Ypw46PpRdEDHI'; // Replace with your bot token
//     const CHAT_ID = '6536432455'; // Replace with your chat ID

//     await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ chat_id: CHAT_ID, text: message })
//     });

//     alert('Buyurtma Telegramga yuborildi!');
//     setCart([]);
//     localStorage.removeItem('cart');
//   };

//   return (
//     <div className='bg-orange-400 min-h-screen'>
//       <div className="container mx-auto px-4">
//         <div className='text-center justify-center py-8 flex gap-10'>
//           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
//           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
//         </div>
//         <div className="bg-white p-5 max-w-xl mx-auto rounded shadow">
//           <h2 className="text-xl font-semibold mb-4">🛒 Savatchadagi mahsulotlar</h2>
//           {cart.length === 0 ? (
//             <p>Mahsulot yo‘q</p>
//           ) : (
//             <ul className='space-y-3'>
//               {cart.map((item, index) => (
//                 <li key={item.id} className='border p-3 rounded'>
//                   <div className='flex justify-between items-center'>
//                     <span>{index + 1}) {item.name} x {item.quantity}</span>
//                     <div className="flex items-center gap-3">
//                       <span>{item.price * item.quantity} so‘m</span>
//                       <button
//                         onClick={() => deleteItem(item.id)}
//                         className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
//                       >
//                         🗑
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//               <hr className='my-3' />
//               <div className='flex justify-between font-bold'>
//                 <span>Jami:</span>
//                 <span>{total} so‘m</span>
//               </div>
//               <button
//                 onClick={sendOrder}
//                 className='mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'
//               >
//                 📤 Buyurtmani yuborish
//               </button>
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }













import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Process() {
  const [cart, setCart] = useState([]);
  const [customerNumber, setCustomerNumber] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    setCart(saved ? JSON.parse(saved) : []);

    const customerCount = parseInt(localStorage.getItem('customerCount') || '0');
    const newCount = customerCount + 1;
    setCustomerNumber(newCount);
    localStorage.setItem('customerCount', newCount);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.quantity * parseInt(item.price), 0);

  const sendToTelegram = () => {
    const botToken = '7537686168:AAFrKzV2hmvW2VFlRD7vH0Ypw46PpRdEDHI'; // Replace with your bot token
    const chatId = '6536432455';     // Replace with your chat ID

    const orderList = cart.map((item, index) =>
      `${index + 1}. 🍽 ${item.name} - ${item.quantity} dona (${item.quantity * item.price} so‘m)`
    ).join('\n');

    const message = `🧑 ${customerNumber}-mijozning buyurtmasi:\n\n${orderList}\n\n💰 Umumiy: ${total} so‘m`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      })
    })
    .then(() => {
      alert("Buyurtma yuborildi!");
      localStorage.removeItem('cart');
      setCart([]);
    })
    .catch((err) => {
      alert("Xatolik yuz berdi!");
      console.error(err);
    });
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  return (
    <div className='bg-orange-400 min-h-screen'>
      <div className="container mx-auto px-4">
        <div className='text-center justify-center py-8 flex gap-10'>
          <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
          <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
        </div>
        <div className="bg-white p-5 max-w-xl mx-auto rounded shadow">
          <h2 className="text-xl font-semibold mb-4">🛒 Savatchadagi mahsulotlar</h2>
          {cart.length === 0 ? (
            <p>Mahsulot yo‘q</p>
          ) : (
            <>
              <ul className='space-y-3'>
                {cart.map((item, index) => (
                  <li key={item.id} className='border p-3 rounded'>
                    <div className='flex justify-between items-center'>
                      <span>{index + 1}. {item.name} x {item.quantity}</span>
                      <div className="flex items-center gap-4">
                        <span>{item.price * item.quantity} so‘m</span>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                          onClick={() => removeItem(item.id)}
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <hr className='my-3' />
              <div className='flex justify-between font-bold'>
                <span>Jami:</span>
                <span>{total} so‘m</span>
              </div>
              <button
                className="w-full mt-5 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
                onClick={sendToTelegram}
              >
                Buyurtma berish
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}