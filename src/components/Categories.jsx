import React from 'react';

function Categories({item, onClick}) {


  return (
    <li className="nav-item">
      <button className="nav-link active" id={item.id} onClick={onClick}>{item.title}</button>
    </li>
  )
}

export default Categories;