import React from 'react'
import Card from './Card'
import FoodData from '../Api/FoodData'

const ItemCard = () => {
  return (
    <div className='flex flex-wrap gap-6 overflow-x-hidden' >
     
     {
        FoodData.map((item,index)=>(<Card key={index} item={item} />))
     }
    </div>
  )
}

export default ItemCard
