import React from 'react';
import Banner from './Banner';

function Error() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner/>
          <section className="top-sales">
            <h2 className="text-center">Страница не найдена</h2>
            <p>
              Извините, такая страница не найдена!
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Error;