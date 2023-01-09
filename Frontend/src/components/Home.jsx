import React, { useEffect } from "react";
import Card from "./Card.jsx";
import OrderBoton from "./OrderBoton.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts } from "../actions/index.js";
import './Home.css'

const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts()) 
    }
      dispatch(getCategories())
  }, [dispatch, products.length]); 

    return(
      <div className="home">
        <h1>E-commerce</h1>
        <OrderBoton/>
        <div className="cardsContainer">
        {
            products.map(products => (
                <Card
                    key={products.id}
                    id={products.id}
                    title={products.title}
                    price={products.price}
                    description={products.description}
                    category={products.category}
                    image={products.image}
                    rating={products.rating}
                ></Card>
            ))
        }
        </div>
      </div>
    )
}

export default Home