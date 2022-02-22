import React from 'react';
import Banner from './Banner';
import TopSales from './TopSales';
import CatalogItems from './CatalogItems';

function Main() {
  return (
    <main className="container">
    <div className="row">
      <div className="col">
        <Banner/>
        <TopSales/>
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>
          <CatalogItems/>
        </section>
      </div>
    </div>
  </main>
  )
}

export default Main;