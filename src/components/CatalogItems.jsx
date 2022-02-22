/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { catalogRequest } from './../actions/index';
import { nanoid } from 'nanoid';
import Preloader from './Preloader';
import CatalogItem from './CatalogItem';

function CatalogItems() {
  const { items, loading, error } = useSelector(state => state.catalogItems);
  const dispatch = useDispatch();

  useEffect(() => dispatch(catalogRequest()), []);
  
  console.log(items);

  return (
    <>
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="/">Все</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Женская обувь</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Мужская обувь</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Обувь унисекс</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Детская обувь</a>
        </li>
      </ul>
      <div className="row">
        {loading && !error ? <Preloader/> : items.map(item => <CatalogItem item={item} key={nanoid()}/>)}
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary">Загрузить ещё</button>
      </div>
    </>
  )
}

export default CatalogItems;