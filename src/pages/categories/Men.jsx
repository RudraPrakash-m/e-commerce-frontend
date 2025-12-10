import React, { useContext } from 'react'
import { AllProductsContext } from '../../context/AllItems'
import ProductCard from '../../components/productCard/ProductCard'

const Men = () => {
  const {products} = useContext(AllProductsContext)

  const menProducts = products.filter(item=>item.category==="men")

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {menProducts.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Men