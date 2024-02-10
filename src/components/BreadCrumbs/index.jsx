import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  export default function index({items}) {
    return (
      <div onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
        {items?.map((item, index)=> (
         <div key={index}>
            {item.label}
         </div>
        ))}
        </Breadcrumbs>
      </div>
    );
  }
