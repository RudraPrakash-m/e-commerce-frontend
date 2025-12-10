import React, { useContext } from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import { AllProductsContext } from '../../context/AllItems'

const HomeAppliences = () => {
  const {products} = useContext(AllProductsContext)
    
      const homeAppliences = products.filter(item=>item.category==="home")
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {homeAppliences.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default HomeAppliences