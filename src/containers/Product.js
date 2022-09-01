import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {

  const products = useSelector((state) => state.allProducts.products);
 
  const renderList = products.map(({id, image, title , price , category}) => {
    
    return (
      <Link to={`product/${id}`} key={id}>
      <div className="ui card"  style={{width : '320px'}}>
          <div className="image" style={{padding : '6px' }}>
            <img src={image} alt={title}/>
          </div>
        
          <div className="content">
              <span className="header">{title}</span>
              <div className="meta" style={{paddingTop : '10px'}}>
                <span className="date">{price}$</span>
              </div>
              <div className="meta" style={{paddingTop : '10px'}}>
                <span className="date">{category}</span>
              </div>
          </div>
      </div>
    </Link>
    
    )

  });

  return (
    <>
    {renderList}
    </>
  )

 

}

export default Product