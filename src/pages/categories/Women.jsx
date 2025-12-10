import React, { useContext } from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import { AllProductsContext } from '../../context/AllItems'

const Women = () => {
  const {products} = useContext(AllProductsContext)
  
    const womenProducts = products.filter(item=>item.category==="women")
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {womenProducts.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Women