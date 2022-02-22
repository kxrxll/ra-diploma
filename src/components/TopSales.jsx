/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { topSalesRequest } from './../actions/index';
import { nanoid } from 'nanoid';
import Preloader from './Preloader';
import TopSalesItem from './TopSalesItem';

function TopSales() {
  const { topItems, loading, error } = useSelector(state => state.topSales);
  const dispatch = useDispatch();

  useEffect(() => dispatch(topSalesRequest()), []);

  return (
    <>
    { topItems ?
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        {
          loading && !error ? 
            <Preloader/> : 
            <div className="row">
              {topItems.map(item => <TopSalesItem item={item} key={nanoid()}/>)}
            </div>
        }
      </section> : false
    }
    </>
  )
}

export default TopSales;