/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Banner from './Banner';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { itemRequest } from '../actions';
import { nanoid } from 'nanoid';
import Preloader from './Preloader';

function Item() {
  const id = useParams().id;

  const dispatch = useDispatch();
  
  const { item, loading, error } = useSelector(state => state.item);

  useEffect(()=> { dispatch(itemRequest(id))}, [])

  const sizes = item.sizes;

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
                      <span key={nanoid()} className="catalog-item-size selected">{item.size}</span>
                    )) : false}
                  </p>
                  <p>Количество: <span className="btn-group btn-group-sm pl-2">
                    <button className="btn btn-secondary">-</button>
                    <span className="btn btn-outline-primary">1</span>
                    <button className="btn btn-secondary">+</button>
                  </span>
                  </p>
                </div>
                <button className="btn btn-danger btn-block btn-lg">В корзину</button>
              </div>
            </div>
          </section>}
        </div>
      </div>
    </main>
  )
}

export default Item;