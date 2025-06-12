import React, { useState } from 'react'

export default function AdminPanel({ addProduct, products = [], deleteProduct }) {
  const [password, setPassword] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [error, setError] = useState('')

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const [editingId, setEditingId] = useState(null) // Tahrirlanayotgan mahsulot IDsi

  const handleLogin = () => {
    if (password === '0000') {
      setIsAuthorized(true)
      setError('')
    } else {
      setError('❌ Noto‘g‘ri parol!')
    }
  }

  const handleAddOrUpdate = () => {
    if (!name || !price || !image) return

    const newProduct = {
      id: editingId || Date.now(),
      name,
      price,
      image,
    }

    if (editingId) {
      // Yangilash
      deleteProduct(editingId)
      addProduct(newProduct)
      setEditingId(null)
    } else {
      // Yangi qo‘shish
      addProduct(newProduct)
    }

    setName('')
    setPrice('')
    setImage('')
  }

  const startEdit = (product) => {
    setEditingId(product.id)
    setName(product.name)
    setPrice(product.price)
    setImage(product.image)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setName('')
    setPrice('')
    setImage('')
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-orange-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-[300px] text-center">
          <h2 className="text-xl font-bold mb-4">🔐 Admin Panelga kirish</h2>
          <input
            type="password"
            placeholder="Parol kiriting"
            className="border px-3 py-2 w-full rounded mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
          >
            Kirish
          </button>
          {error && <p className="text-red-500 mt-3">{error}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">👨‍💻 Admin Panel</h1>

      {/* Mahsulot qo‘shish/tahrirlash formi */}
      <div className="bg-white p-6 rounded shadow mb-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? '✏️ Mahsulotni tahrirlash' : '🧾 Mahsulot qo‘shish'}
        </h2>
        <input
          type="text"
          placeholder="Mahsulot nomi"
          className="border px-3 py-2 w-full rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Narxi (masalan: 20000)"
          className="border px-3 py-2 w-full rounded mb-3"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rasm URL"
          className="border px-3 py-2 w-full rounded mb-3"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            onClick={handleAddOrUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            {editingId ? 'Saqlash' : 'Qo‘shish'}
          </button>
          {editingId && (
            <button
              onClick={cancelEdit}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 w-full"
            >
              Bekor qilish
            </button>
          )}
        </div>
      </div>

      {/* Mahsulotlar ro‘yxati */}
      <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">📦 Mahsulotlar ro‘yxati</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">Hozircha mahsulot yo‘q.</p>
        ) : (
          <ul className="space-y-3">
            {products.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between border p-3 rounded bg-gray-50"
              >
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-gray-600">{p.price} so‘m</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(p)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Tahrirlash
                  </button>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    O‘chirish
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
