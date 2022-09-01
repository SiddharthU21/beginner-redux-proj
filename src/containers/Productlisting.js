import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'
import Product from './Product'

const Productlisting = () => {
  
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const resp = await axios.get('https://fakestoreapi.com/products')
                            .catch((err) => {
                              console.log('err',err);
                            })
    dispatch(setProducts(resp.data));
  }

  useEffect(() => {
    fetchProducts();
  },[])

  console.log("Products : ",products);

  return (
    <div className='ui link cards' style={{paddingTop:"8rem" , justifyContent : 'center'}}>
      <Product/>
    </div>
  )

}

export default Productlisting