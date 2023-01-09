import React from "react";
import { Link } from "react-router-dom";
import './ProductDetail.css'

const ProductDetail = ({product}) => {    
    return(
         <div className="detailContainer">
                <div className="container">
                    <div className="info">
                    <h3>{product.title}</h3>
                    <img src={product.image} alt="imagen" width={"150px"} height={"150px"}></img>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>{product.category}</p>
                    <p>Rating: {product.rating.rate}</p>
                        <button className="botonDetail">
                        <Link to="/">Regresar</Link>
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default ProductDetail