import React, { useState, useEffect } from 'react';
import './App.css';

function Copid() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'http://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'
    );

    const items = await data.json();
    console.log(items);
    setItems(items);
  }
  return (
    <div>
      {items.map(item => (
        <h1>{items.name}</h1>
      ))}
    </div>
  );
}

export default Copid;