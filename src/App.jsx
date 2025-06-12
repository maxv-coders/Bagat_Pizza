import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/menu'
import Process from './components/process'
import AdminPanel from './components/admin-panel'

export default function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products')
    return saved ? JSON.parse(saved) : []
  })

  // localStorage'ga yozish
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const addProduct = (product) => {
    setProducts(prev => [...prev, product])
  }

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  const updateProduct = (updatedProduct) => {
    setProducts(prev =>
      prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
    )
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu products={products} />
        </Route>
        <Route path="/process" component={Process} />
        <Route path="/admin">
          <AdminPanel
            products={products}
            addProduct={addProduct}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        </Route>
      </Switch>
    </Router>
  )
}