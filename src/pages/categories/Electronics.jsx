import React, { useContext } from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import { AllProductsContext } from '../../context/AllItems'

const Electronics = () => {
  const {products} = useContext(AllProductsContext)
    
      const electronicsProducts = products.filter(item=>item.category==="electronics")
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {electronicsProducts.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Electronics