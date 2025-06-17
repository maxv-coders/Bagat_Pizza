// import React, { useState } from 'react'

// export default function AdminPanel({ addProduct, products = [], deleteProduct }) {
//   const [password, setPassword] = useState('')
//   const [isAuthorized, setIsAuthorized] = useState(false)
//   const [error, setError] = useState('')

//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [image, setImage] = useState('')

//   const [editingId, setEditingId] = useState(null) // Tahrirlanayotgan mahsulot IDsi

//   const handleLogin = () => {
//     if (password === '0000') {
//       setIsAuthorized(true)
//       setError('')
//     } else {
//       setError('❌ Noto‘g‘ri parol!')
//     }
//   }

//   const handleAddOrUpdate = () => {
//     if (!name || !price || !image) return

//     const newProduct = {
//       id: editingId || Date.now(),
//       name,
//       price,
//       image,
//     }

//     if (editingId) {
//       // Yangilash
//       deleteProduct(editingId)
//       addProduct(newProduct)
//       setEditingId(null)
//     } else {
//       // Yangi qo‘shish
//       addProduct(newProduct)
//     }

//     setName('')
//     setPrice('')
//     setImage('')
//   }

//   const startEdit = (product) => {
//     setEditingId(product.id)
//     setName(product.name)
//     setPrice(product.price)
//     setImage(product.image)
//   }

//   const cancelEdit = () => {
//     setEditingId(null)
//     setName('')
//     setPrice('')
//     setImage('')
//   }

//   if (!isAuthorized) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="bg-white p-8 rounded shadow-md w-[300px] text-center border-[5px]">
//           <h2 className="text-xl font-bold mb-4">🔐 Admin Panelga kirish</h2>
//           <input
//             type="password"
//             placeholder="Parol kiriting"
//             className="border px-3 py-2 w-full rounded mb-3"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             onClick={handleLogin}
//             className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
//           >
//             Kirish
//           </button>
//           {error && <p className="text-red-500 mt-3">{error}</p>}
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-4 text-center">👨‍💻 Admin Panel</h1>

//       {/* Mahsulot qo‘shish/tahrirlash formi */}
//       <div className="bg-white p-6 rounded shadow mb-6 max-w-xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4">
//           {editingId ? '✏️ Mahsulotni tahrirlash' : '🧾 Mahsulot qo‘shish'}
//         </h2>
//         <input
//           type="text"
//           placeholder="Mahsulot nomi"
//           className="border px-3 py-2 w-full rounded mb-3"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Narxi (masalan: 20000)"
//           className="border px-3 py-2 w-full rounded mb-3"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Rasm URL"
//           className="border px-3 py-2 w-full rounded mb-3"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//         />
//         <div className="flex gap-2">
//           <button
//             onClick={handleAddOrUpdate}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
//           >
//             {editingId ? 'Saqlash' : 'Qo‘shish'}
//           </button>
//           {editingId && (
//             <button
//               onClick={cancelEdit}
//               className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 w-full"
//             >
//               Bekor qilish
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Mahsulotlar ro‘yxati */}
//       <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4">📦 Mahsulotlar ro‘yxati</h2>
//         {products.length === 0 ? (
//           <p className="text-gray-500">Hozircha mahsulot yo‘q.</p>
//         ) : (
//           <ul className="space-y-3">
//             {products.map((p) => (
//               <li
//                 key={p.id}
//                 className="flex items-center justify-between border p-3 rounded bg-gray-50"
//               >
//                 <div>
//                   <p className="font-semibold">{p.name}</p>
//                   <p className="text-sm text-gray-600">{p.price} so‘m</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => startEdit(p)}
//                     className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                   >
//                     Tahrirlash
//                   </button>
//                   <button
//                     onClick={() => deleteProduct(p.id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                   >
//                     O‘chirish
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   )
// }










import React, { useState, useEffect } from "react";

const categories = ["burger", "ichimlik", "desert", "combo"];

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "burger",
  });
  const [authorized, setAuthorized] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(true);
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authorized) return;
    const saved = localStorage.getItem("products");
    if (saved) {
      const parsed = JSON.parse(saved).map((p) => ({
        ...p,
        category: p.category || "unknown",
      }));
      setProducts(parsed);
    }
  }, [authorized]);

  useEffect(() => {
    if (!authorized) return;
    localStorage.setItem("products", JSON.stringify(products));
  }, [products, authorized]);

  const checkPassword = () => {
    if (passwordInput === "0000") {
      setAuthorized(true);
      setShowPasswordModal(false);
      setError("");
    } else {
      setError("Parol noto‘g‘ri, qayta urinib ko‘ring.");
      setPasswordInput("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Mahsulot qo'shish
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.image || !form.category) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    const newProduct = {
      ...form,
      id: Date.now(),
      price: parseInt(form.price),
    };

    setProducts((prev) => [...prev, newProduct]);
    setForm({ name: "", price: "", image: "", category: "burger" });
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  if (!authorized && !showPasswordModal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
        <h2 className="text-2xl font-bold text-red-600">
          Kirish rad etildi! Parol noto‘g‘ri.
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-center text-red-600">
              Admin panelga kirish
            </h2>
            <input
              type="password"
              placeholder="Parolni kiriting"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full p-3 border rounded mb-4"
              onKeyDown={(e) => {
                if (e.key === "Enter") checkPassword();
              }}
              autoFocus
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              onClick={checkPassword}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded w-full font-bold"
            >
              Kirish
            </button>
          </div>
        </div>
      )}

      {authorized && (
        <>
          <h1 className="text-3xl font-bold text-center mb-6 text-red-600">
            Admin Panel – Mahsulot Qo‘shish
          </h1>

          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white shadow p-6 rounded-lg space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Mahsulot nomi"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <input
              type="number"
              name="price"
              placeholder="Narxi (so‘m)"
              value={form.price}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              name="image"
              placeholder="Rasm URL manzili"
              value={form.image}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.toUpperCase()}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded w-full font-bold"
            >
              Mahsulotni Qo‘shish
            </button>
          </form>

          {/* Mahsulotlar ro‘yxati */}
          <div className="max-w-5xl mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Yangi Mahsulotlar Ro‘yxati
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {products.map((p) => (
                <div key={p.id} className="bg-white shadow rounded p-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="text-sm text-gray-600">
                    {(p.category || "unknown").toUpperCase()}
                  </p>
                  <p className="text-red-600 font-bold">
                    {p.price.toLocaleString()} so‘m
                  </p>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="mt-2 text-sm text-red-500 hover:underline"
                  >
                    🗑 O‘chirish
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
