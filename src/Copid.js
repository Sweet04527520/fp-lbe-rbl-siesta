import React, { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import Card from './Card';


function Copid() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-api.com/v1/playlists', { mode: 'cors', headers: {'Access-Control-Allow-Origin':'*'}
      });
    // .then(response => response.json())

    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  }
  return (
    <div className='card-wrapper'>
      {items.map(item => (
        <Card item={item} key={item.images.showcase}></Card>
      ))}
    </div>
  );
}

export default Copid;