import React from 'react';
import Banner from './Banner';
import CatalogItems from './CatalogItems';

function Catalog() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <form className="catalog-search-form form-inline">
              <input className="form-control" placeholder="Поиск" />
            </form>
            <CatalogItems />
          </section>
        </div>
      </div>
    </main>
  )
}

export default Catalog;