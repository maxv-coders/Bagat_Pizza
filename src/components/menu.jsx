// // // // // import React, { useState } from 'react'
// // // // // import { Link } from 'react-router-dom'

// // // // // export default function Home({ products }) {
// // // // //   const [counts, setCounts] = useState({})

// // // // //   const increment = (id) => {
// // // // //     setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
// // // // //   }

// // // // //   const decrement = (id) => {
// // // // //     setCounts(prev => ({
// // // // //       ...prev,
// // // // //       [id]: prev[id] > 0 ? prev[id] - 1 : 0,
// // // // //     }))
// // // // //   }

// // // // //   return (
// // // // //     <div className='bg-orange-400 min-h-screen'>
// // // // //       <div className="container mx-auto px-4">
// // // // //         <div className='text-center justify-center py-8 flex gap-10'>
// // // // //           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
// // // // //           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
// // // // //         </div>
// // // // //         <div className='flex flex-wrap gap-5 justify-center pb-20'>
// // // // //           {products.map(product => (
// // // // //             <div
// // // // //               key={product.id}
// // // // //               className='w-[200px] h-[300px] p-[5px] rounded-md bg-white shadow'
// // // // //             >
// // // // //               <img
// // // // //                 src={product.image}
// // // // //                 alt={product.name}
// // // // //                 className='w-[190px] h-[180px] object-cover rounded mb-1'
// // // // //               />
// // // // //               <div className='space-y-2'>
// // // // //                 <h3 className='text-[20px] font-semibold'>{product.name}</h3>
// // // // //                 <h3 className='text-green-700 font-medium'>{product.price} so‘m</h3>
// // // // //                 <div className='flex justify-center items-center gap-3 pt-2'>
// // // // //                   <button
// // // // //                     onClick={() => decrement(product.id)}
// // // // //                     className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
// // // // //                   >-</button>
// // // // //                   <span className='text-xl font-bold'>{counts[product.id] || 0}</span>
// // // // //                   <button
// // // // //                     onClick={() => increment(product.id)}
// // // // //                     className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
// // // // //                   >+</button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }


























// // // import React, { useState, useEffect } from 'react'
// // // import { Link } from 'react-router-dom'

// // // export default function Menu({ products }) {
// // //   const [counts, setCounts] = useState({})
// // //   const [cart, setCart] = useState(() => {
// // //     const saved = localStorage.getItem('cart')
// // //     return saved ? JSON.parse(saved) : []
// // //   })

// // //   useEffect(() => {
// // //     localStorage.setItem('cart', JSON.stringify(cart))
// // //   }, [cart])

// // //   const increment = (id) => {
// // //     setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
// // //   }

// // //   const decrement = (id) => {
// // //     setCounts(prev => {
// // //       const updated = { ...prev, [id]: (prev[id] > 0 ? prev[id] - 1 : 0) }
// // //       return updated
// // //     })
// // //   }

// // //   const addToCart = (product) => {
// // //     const quantity = counts[product.id] || 0
// // //     if (quantity === 0) return

// // //     const existingIndex = cart.findIndex(item => item.id === product.id)
// // //     let newCart

// // //     if (existingIndex !== -1) {
// // //       newCart = [...cart]
// // //       newCart[existingIndex].quantity += quantity
// // //     } else {
// // //       newCart = [...cart, { ...product, quantity }]
// // //     }

// // //     setCart(newCart)
// // //     setCounts(prev => ({ ...prev, [product.id]: 0 }))
// // //   }

// // //   return (
// // //     <div className='bg-orange-400 min-h-screen'>
// // //       <div className="container mx-auto px-4">
// // //         <div className='text-center justify-center py-8 flex gap-10'>
// // //           <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
// // //           <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
// // //         </div>

// // //         <div className='flex flex-wrap gap-5 justify-center pb-20'>
// // //           {products.map(product => (
// // //             <div key={product.id} className='w-[200px] h-[350px] p-[5px] rounded-md bg-white shadow'>
// // //               <img
// // //                 src={product.image}
// // //                 alt={product.name}
// // //                 className='w-[190px] h-[180px] object-cover rounded mb-1'
// // //               />
// // //               <div className='space-y-1'>
// // //                 <h3 className='text-[20px] font-semibold'>{product.name}</h3>
// // //                 <h3 className='text-green-700 font-medium'>{product.price} so‘m</h3>
// // //                 <div className='flex justify-center items-center gap-3 pt-2'>
// // //                   <button
// // //                     onClick={() => decrement(product.id)}
// // //                     className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
// // //                   >-</button>
// // //                   <span className='text-xl font-bold'>{counts[product.id] || 0}</span>
// // //                   <button
// // //                     onClick={() => increment(product.id)}
// // //                     className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
// // //                   >+</button>
// // //                 </div>
// // //                 <button
// // //                   onClick={() => addToCart(product)}
// // //                   className='bg-blue-500 text-white w-full mt-2 py-1 rounded hover:bg-blue-600'
// // //                 >
// // //                   Savatchaga qo‘shish
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }






















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
// //       const currentCount = prev[id] || 0
// //       if (currentCount > 0) {
// //         return { ...prev, [id]: currentCount - 1 }
// //       }
// //       return prev
// //     })
// //   }

// //   const addToCart = (product) => {
// //     const quantity = counts[product.id] || 0
// //     if (quantity === 0) return

// //     const existingIndex = cart.findIndex(item => item.id === product.id)
// //     let updatedCart

// //     if (existingIndex !== -1) {
// //       updatedCart = [...cart]
// //       updatedCart[existingIndex].quantity += quantity
// //     } else {
// //       updatedCart = [...cart, { ...product, quantity }]
// //     }

// //     setCart(updatedCart)
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

























// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function Menu({ products }) {
//   const [counts, setCounts] = useState({});
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) setCart(JSON.parse(savedCart));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const increment = (id) => {
//     setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
//   };

//   const decrement = (id) => {
//     setCounts(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
//   };

//   const addToCart = (product) => {
//     const quantity = counts[product.id] || 0;
//     if (quantity === 0) return;

//     const index = cart.findIndex(item => item.id === product.id);
//     const newCart = [...cart];

//     if (index >= 0) {
//       newCart[index].quantity += quantity;
//     } else {
//       newCart.push({ ...product, quantity });
//     }

//     setCart(newCart);
//     setCounts(prev => ({ ...prev, [product.id]: 0 }));
//   };

//   return (
//     <div className='bg-[#fff] min-h-screen'>
//       <div className="container mx-auto px-4">
//         <div className='text-center justify-center py-8 flex gap-10'>
//           <Link to="/" className="text-[25px] font-bold text-black">Menu</Link>
//           <Link to="/process" className="text-[25px] font-bold text-black">Process</Link>
//         </div>

//         <div className='flex flex-wrap gap-5 justify-center pb-20'>
//           {products.map(product => (
//             <div key={product.id} className='w-[250px] h-[400px] p-[25px] rounded-md bg-white border-[5px] shadow-md'>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className='w-[190px] h-[180px] object-cover rounded mb-1'
//               />
//               <div className='space-y-1 flex flex-col items-center'>
//                 <h3 className='text-[30px] font-bold'>{product.name}</h3>
//                 <h3 className='text-green-700 font-semibold text-[20px]'>{product.price} so‘m</h3>
//                 <div className='flex justify-center items-center gap-3 pt-2'>
//                   <button
//                     onClick={() => decrement(product.id)}
//                     className='bg-[#a7a7a7] text-white px-3 py-1 rounded  mb-[15px]'
//                   >-</button>
//                   <span className='text-xl font-bold mb-[15px]'>{counts[product.id] || 0}</span>
//                   <button
//                     onClick={() => increment(product.id)}
//                     className='bg-[#a7a7a7] text-white px-3 py-1 rounded  mb-[15px]'
//                   >+</button>
//                 </div>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className='bg-[#a7a7a7] text-white w-full mt-2 py-1 rounded hover:bg-[#949494] mb-[25px]'
//                 >
//                   Savatchaga qo‘shish
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }











import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../assets/pizzalogo.png';

export default function Menu({ products }) {
  const [counts, setCounts] = useState({});
  const [cart, setCart] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const increment = (id) => {
    const updatedCounts = { ...counts, [id]: (counts[id] || 0) + 1 };
    setCounts(updatedCounts);

    const product = products.find(p => p.id === id);
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === id);
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
    const index = updatedCart.findIndex(item => item.id === id);
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

  return (
    <div className='bg-[#fff] min-h-screen pb-[80px]'>
      <div className="container mx-auto px-4">
        <div className='text-center items-center justify-between py-8 flex'>
          <div className='flex items-center gap-2'>
            <img src={Logo} className='w-[50px]' alt="" />
            <h1 className='text-[35px] font-medium'>BAGAT PIZZA</h1>
          </div>
          <div className='flex gap-[20px]'>
            <Link to="/" className="text-[20px] font-bold px-6 py-1 rounded bg-orange-400 text-white">Menu</Link>
            {/* <Link to="/cart" className="text-[20px] font-bold px-6 py-1 rounded bg-orange-400 text-white">Savat</Link> */}
          </div>
        </div>

        <div className='flex flex-wrap gap-5 justify-center pb-20'>
          {products.map(product => (
            <div key={product.id} className='w-[270px] p-[25px] rounded-[50px] bg-white shadow-2xl flex flex-col items-center'>
              <img
                src={product.image}
                alt={product.name}
                className='w-[190px] h-[180px] object-cover rounded-[30px] mb-1'
              />
              <div className='space-y-1 flex flex-col items-center'>
                <h3 className='text-[28px] font-bold'>{product.name}</h3>
                <h3 className='text-green-700 font-semibold text-[18px]'>{product.price} so‘m</h3>
                <div className='flex justify-center items-center gap-3 pt-2'>
                  <button
                    onClick={() => decrement(product.id)}
                    className='bg-[#a7a7a7] text-white px-3 py-1 rounded mb-[15px]'
                  >-</button>
                  <span className='text-xl font-bold mb-[15px]'>{counts[product.id] || 0}</span>
                  <button
                    onClick={() => increment(product.id)}
                    className='bg-[#a7a7a7] text-white px-3 py-1 rounded mb-[15px]'
                  >+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Button */}
      <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50'>
        {totalCount === 0 ? (
          <button
            disabled
            className='bg-gray-400 text-white font-semibold px-8 py-5 rounded shadow-2xl cursor-not-allowed'
          >
            Savatni ochish
          </button>
        ) : (
          <button
            onClick={() => history.push('/cart')}
            className='bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-5 rounded shadow-2xl'
          >
            Savatni ochish
          </button>
        )}
      </div>
    </div>
  );
}
