/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Categories({item, onClick}) {


  return (
    <li className="nav-item">
      <a className="nav-link active" id={item.id} onClick={onClick}>{item.title}</a>
    </li>
  )
}

export default Categories;