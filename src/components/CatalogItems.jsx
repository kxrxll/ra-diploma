/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { catalogRequest, catalogFilter, categoriesRequest, catalogMore } from './../actions/index';
import { nanoid } from 'nanoid';
import Preloader from './Preloader';
import CatalogItem from './CatalogItem';
import Categories from './Categories';

function CatalogItems() {
  const { items, loading, error, noButton } = useSelector(state => state.catalogItems);
  const { items : categories, loading: categoriesLoading, error: categoriesError} = useSelector(state => state.categories);

  const dispatch = useDispatch();
  
  const [category, setCategory] = useState(null);
  const [numberOfItems, setNumberOfItems] = useState(1);

  useEffect(() => dispatch(catalogRequest()), []);
  useEffect(() => dispatch(categoriesRequest()), []);
  useEffect(() => dispatch(catalogFilter(category)), [category]);

  const handleCategoriesClick = (evt) => {
    evt.preventDefault();
    setCategory(evt.target.id);
  }

  const handleAllClick = (evt) => {
    evt.preventDefault();
    dispatch(catalogRequest());
  }

  const handleMoreClick = (evt) => {
    evt.preventDefault();
    setNumberOfItems(numberOfItems + 6);
    dispatch(catalogMore(category, numberOfItems));
  }

  return (
    <>
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <button className="nav-link active" onClick={handleAllClick}>Все</button>
        </li>
        {categoriesLoading && !categoriesError ? <Preloader/> : categories.map(item => <Categories item={item} key={nanoid()} onClick={handleCategoriesClick}/>)}
      </ul>
      <div className="row">
        {loading && !error ? <Preloader/> : items.map(item => <CatalogItem item={item} key={nanoid()}/>)}
      </div>
      <div className="text-center">
        { !noButton ? <button className="btn btn-outline-primary" onClick={handleMoreClick}>Загрузить ещё</button> : false }
      </div>
    </>
  )
}

export default CatalogItems;