import React from 'react'
import CategoryItem from '../category-item.component'

const Directory = () => {
    const categories = 
    [
      {
        "id": 1,
        "title": "HATS",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "JACKETS",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "SNEAKERS",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "WOMAN",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "MENS",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
    ];
  return (
    <div className='categories-container'>
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
  )
}

export default Directory;