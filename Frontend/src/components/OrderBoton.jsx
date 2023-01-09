import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderProducts, allProducts } from "../actions/index.js";

const OrderBoton = () => {

    const dispatch = useDispatch()
    const categorias = useSelector(state => state.categories)

    const changeHandler = (e) =>{
        dispatch(orderProducts(e.target.value))
      }

    const handler = () => {
        dispatch(allProducts())
    }

  return (
    <div>
      <select
        className="orderBoton"
        name="category"
        value="value"
        onChange={(e) => changeHandler(e)}
      >
        <option hidden>Categoria</option>
        {categorias.map((c) => {
          return (
            <option value={c} key={c}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </option>
          );
        })}
      </select>

      <button onClick={() => handler()}>Todos</button>
    </div>
  );
};

export default OrderBoton