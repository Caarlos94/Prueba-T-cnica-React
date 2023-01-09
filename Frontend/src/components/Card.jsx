import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, title, price, category, image }) => {
  return (
    <div className='card'>
      <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
        <div>
          <p>{title}</p>
          <p>{price}</p>
          <p>{category}</p>
          <img src={image} alt="imagen" width={"150px"} height={"150px"}></img>
        </div>
      </Link>
    </div>
  );
};

export default Card