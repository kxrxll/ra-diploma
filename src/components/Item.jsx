/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { itemRequest, cartAdd } from '../actions';
import { nanoid } from 'nanoid';
import Preloader from './Preloader';

function Item() {
  const id = useParams().id;

  const dispatch = useDispatch();
  
  const { item, loading, error } = useSelector(state => state.item);
  const cart = useSelector(state => state.cart);

  console.log(item);

  useEffect(()=> { dispatch(itemRequest(id))}, [])

  const sizes = item.sizes;

  const [toAdd, setToAdd] = useState({number:1, size: null});
  console.log(toAdd);

  const handleAdd = () => {
    console.log(item, toAdd.number, toAdd.size);
    dispatch(cartAdd({
      item,
      number: toAdd.number,
      size: toAdd.size
    }));
    console.log(cart);
  }

  const handleQuantity = (evt) => {
    evt.preventDefault();
    if (evt.target.textContent === '+') {
      setToAdd({...toAdd, number: toAdd.number + 1});
    } else setToAdd({...toAdd, number: toAdd.number - 1});
  }

  const handleSize = (evt) => {
    evt.preventDefault();
    setToAdd({...toAdd, size:evt.target.textContent});
  }

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner/>
            { loading && !error ? <Preloader/> : <section className="catalog-item">
              <h2 className="text-center">{item.title}</h2>
              <div className="row">
                <div className="col-5">
                  <img src={item.images ? item.images[0] : ''} className="img-fluid" alt="" />
                </div>
                <div className="col-7">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Артикул</td>
                        <td>{item.sku}</td>
                      </tr>
                      <tr>
                        <td>Производитель</td>
                        <td>{item.manufacturer}</td>
                      </tr>
                      <tr>
                        <td>Цвет</td>
                        <td>{item.color}</td>
                      </tr>
                      <tr>
                        <td>Материалы</td>
                        <td>{item.material}</td>
                      </tr>
                      <tr>
                        <td>Сезон</td>
                        <td>{item.season}</td>
                      </tr>
                      <tr>
                        <td>Повод</td>
                        <td>{item.reason}</td>
                      </tr>
                    </tbody>
                  </table>
                <div className="text-center">
                  <p>Размеры в наличии: 
                    { sizes ? sizes.map(item => (
                      item.avalible ? <span key={nanoid()} className="catalog-item-size selected" onClick={handleSize} style={{'cursor':'pointer'}}>{item.size}</span> : false
                    )) : false}
                  </p>
                  <p>Количество: <span className="btn-group btn-group-sm pl-2">
                    <button className="btn btn-secondary" onClick={handleQuantity}>-</button>
                    <span className="btn btn-outline-primary">{toAdd.number}</span>
                    <button className="btn btn-secondary" onClick={handleQuantity}>+</button>
                  </span>
                  </p>
                </div>
                <button className="btn btn-danger btn-block btn-lg" onClick={handleAdd}>В корзину</button>
              </div>
            </div>
          </section>}
        </div>
      </div>
    </main>
  )
}

export default Item;