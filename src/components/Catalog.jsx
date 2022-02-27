import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Banner from './Banner';
import CatalogItems from './CatalogItems';
import { catalogSuccess } from '../actions';

function Catalog() {
  const {items} = useSelector(state => state.catalogItems);
  const dispatch = useDispatch();

  const handleInput = (evt) => {
    const search = evt.target.value;
    const newItems = items.filter(item => {
      console.log(item);
      return item.title.startsWith(search);
    });
    console.log(newItems);
    dispatch(catalogSuccess(newItems))
  }

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <form className="catalog-search-form form-inline">
              <input className="form-control" placeholder="Поиск" onChange={handleInput}/>
            </form>
            <CatalogItems />
          </section>
        </div>
      </div>
    </main>
  )
}

export default Catalog;