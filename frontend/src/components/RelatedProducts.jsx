import React, {useContext, useState, useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({category, subCategory}) => {
    
    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item)=> category === item.category)
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory)
            setRelated(productsCopy.slice(1,6))
        }
    },[products])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}></Title>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
            {
                related.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} price={item.price} />))
            }
        </div>
    </div>
  )
}

export default RelatedProducts
