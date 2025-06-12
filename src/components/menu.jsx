// // // // import React, { useState } from 'react'
// // // // import { Link } from 'react-router-dom'

// // // // export default function Home({ products }) {
// // // //   const [counts, setCounts] = useState({})

// // // //   const increment = (id) => {
// // // //     setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
// // // //   }

// // // //   const decrement = (id) => {
// // // //     setCounts(prev => ({
// // // //       ...prev,
// // // //       [id]: prev[id] > 0 ? prev[id] - 1 : 0,
// // // //     }))
// // // //   }

// // // //   return (
// // // //     <div className='bg-orange-400 min-h-screen'>
// // // //       <div className="container mx-auto px-4">
// // // //         <div className='text-center justify-center py-8 flex gap-10'>
// // // //           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
// // // //           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
// // // //         </div>
// // // //         <div className='flex flex-wrap gap-5 justify-center pb-20'>
// // // //           {products.map(product => (
// // // //             <div
// // // //               key={product.id}
// // // //               className='w-[200px] h-[300px] p-[5px] rounded-md bg-white shadow'
// // // //             >
// // // //               <img
// // // //                 src={product.image}
// // // //                 alt={product.name}
// // // //                 className='w-[190px] h-[180px] object-cover rounded mb-1'
// // // //               />
// // // //               <div className='space-y-2'>
// // // //                 <h3 className='text-[20px] font-semibold'>{product.name}</h3>
// // // //                 <h3 className='text-green-700 font-medium'>{product.price} so‘m</h3>
// // // //                 <div className='flex justify-center items-center gap-3 pt-2'>
// // // //                   <button
// // // //                     onClick={() => decrement(product.id)}
// // // //                     className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
// // // //                   >-</button>
// // // //                   <span className='text-xl font-bold'>{counts[product.id] || 0}</span>
// // // //                   <button
// // // //                     onClick={() => increment(product.id)}
// // // //                     className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
// // // //                   >+</button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }


























// // import React, { useState, useEffect } from 'react'
// // import { Link } from 'react-router-dom'

// // export default function Menu({ products }) {
// //   const [counts, setCounts] = useState({})
// //   const [cart, setCart] = useState(() => {
// //     const saved = localStorage.getItem('cart')
// //     return saved ? JSON.parse(saved) : []
// //   })

// //   useEffect(() => {
// //     localStorage.setItem('cart', JSON.stringify(cart))
// //   }, [cart])

// //   const increment = (id) => {
// //     setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
// //   }

// //   const decrement = (id) => {
// //     setCounts(prev => {
// //       const updated = { ...prev, [id]: (prev[id] > 0 ? prev[id] - 1 : 0) }
// //       return updated
// //     })
// //   }

// //   const addToCart = (product) => {
// //     const quantity = counts[product.id] || 0
// //     if (quantity === 0) return

// //     const existingIndex = cart.findIndex(item => item.id === product.id)
// //     let newCart

// //     if (existingIndex !== -1) {
// //       newCart = [...cart]
// //       newCart[existingIndex].quantity += quantity
// //     } else {
// //       newCart = [...cart, { ...product, quantity }]
// //     }

// //     setCart(newCart)
// //     setCounts(prev => ({ ...prev, [product.id]: 0 }))
// //   }

// //   return (
// //     <div className='bg-orange-400 min-h-screen'>
// //       <div className="container mx-auto px-4">
// //         <div className='text-center justify-center py-8 flex gap-10'>
// //           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
// //           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
// //         </div>

// //         <div className='flex flex-wrap gap-5 justify-center pb-20'>
// //           {products.map(product => (
// //             <div key={product.id} className='w-[200px] h-[350px] p-[5px] rounded-md bg-white shadow'>
// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 className='w-[190px] h-[180px] object-cover rounded mb-1'
// //               />
// //               <div className='space-y-1'>
// //                 <h3 className='text-[20px] font-semibold'>{product.name}</h3>
// //                 <h3 className='text-green-700 font-medium'>{product.price} so‘m</h3>
// //                 <div className='flex justify-center items-center gap-3 pt-2'>
// //                   <button
// //                     onClick={() => decrement(product.id)}
// //                     className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
// //                   >-</button>
// //                   <span className='text-xl font-bold'>{counts[product.id] || 0}</span>
// //                   <button
// //                     onClick={() => increment(product.id)}
// //                     className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
// //                   >+</button>
// //                 </div>
// //                 <button
// //                   onClick={() => addToCart(product)}
// //                   className='bg-blue-500 text-white w-full mt-2 py-1 rounded hover:bg-blue-600'
// //                 >
// //                   Savatchaga qo‘shish
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }






















// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// export default function Menu({ products }) {
//   const [counts, setCounts] = useState({})
//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem('cart')
//     return saved ? JSON.parse(saved) : []
//   })

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart))
//   }, [cart])

//   const increment = (id) => {
//     setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
//   }

//   const decrement = (id) => {
//     setCounts(prev => {
//       const currentCount = prev[id] || 0
//       if (currentCount > 0) {
//         return { ...prev, [id]: currentCount - 1 }
//       }
//       return prev
//     })
//   }

//   const addToCart = (product) => {
//     const quantity = counts[product.id] || 0
//     if (quantity === 0) return

//     const existingIndex = cart.findIndex(item => item.id === product.id)
//     let updatedCart

//     if (existingIndex !== -1) {
//       updatedCart = [...cart]
//       updatedCart[existingIndex].quantity += quantity
//     } else {
//       updatedCart = [...cart, { ...product, quantity }]
//     }

//     setCart(updatedCart)
//     setCounts(prev => ({ ...prev, [product.id]: 0 }))
//   }

//   return (
//     <div className='bg-orange-400 min-h-screen'>
//       <div className="container mx-auto px-4">
//         <div className='text-center justify-center py-8 flex gap-10'>
//           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
//           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
//         </div>

//         <div className='flex flex-wrap gap-5 justify-center pb-20'>
//           {products.map(product => (
//             <div key={product.id} className='w-[200px] h-[350px] p-[5px] rounded-md bg-white shadow'>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className='w-[190px] h-[180px] object-cover rounded mb-1'
//               />
//               <div className='space-y-1'>
//                 <h3 className='text-[20px] font-semibold'>{product.name}</h3>
//                 <h3 className='text-green-700 font-medium'>{product.price} so‘m</h3>
//                 <div className='flex justify-center items-center gap-3 pt-2'>
//                   <button
//                     onClick={() => decrement(product.id)}
//                     className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
//                   >-</button>
//                   <span className='text-xl font-bold'>{counts[product.id] || 0}</span>
//                   <button
//                     onClick={() => increment(product.id)}
//                     className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
//                   >+</button>
//                 </div>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className='bg-blue-500 text-white w-full mt-2 py-1 rounded hover:bg-blue-600'
//                 >
//                   Savatchaga qo‘shish
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

























import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Menu({ products }) {
  const [counts, setCounts] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const increment = (id) => {
    setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (id) => {
    setCounts(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
  };

  const addToCart = (product) => {
    const quantity = counts[product.id] || 0;
    if (quantity === 0) return;

    const index = cart.findIndex(item => item.id === product.id);
    const newCart = [...cart];

    if (index >= 0) {
      newCart[index].quantity += quantity;
    } else {
      newCart.push({ ...product, quantity });
    }

    setCart(newCart);
    setCounts(prev => ({ ...prev, [product.id]: 0 }));
  };

  return (
    <div className='bg-orange-400 min-h-screen'>
      <div className="container mx-auto px-4">
        <div className='text-center justify-center py-8 flex gap-10'>
          <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
          <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
        </div>

        <div className='flex flex-wrap gap-5 justify-center pb-20'>
          {products.map(product => (
            <div key={product.id} className='w-[200px] h-[350px] p-[5px] rounded-md bg-white shadow'>
              <img
                src={product.image}
                alt={product.name}
                className='w-[190px] h-[180px] object-cover rounded mb-1'
              />
              <div className='space-y-1'>
                <h3 className='text-[20px] font-semibold'>{product.name}</h3>
                <h3 className='text-green-700 font-medium'>{product.price} so‘m</h3>
                <div className='flex justify-center items-center gap-3 pt-2'>
                  <button
                    onClick={() => decrement(product.id)}
                    className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
                  >-</button>
                  <span className='text-xl font-bold'>{counts[product.id] || 0}</span>
                  <button
                    onClick={() => increment(product.id)}
                    className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
                  >+</button>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className='bg-blue-500 text-white w-full mt-2 py-1 rounded hover:bg-blue-600'
                >
                  Savatchaga qo‘shish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}