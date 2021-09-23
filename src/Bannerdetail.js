import React, { useState, useEffect } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

function Item() {
    const url = useParams().id;
    console.log(url);
    const [info, setInfo] = useState([]);
  useEffect(() => {
      console.log("yeyy");
      fetch(`https://fortnite-api.com/v1/playlists/${url}`).then((res)=>res.json()).then(value=>setInfo(value.data))
      console.log(info);
  }, []);

  const [items, setItems] = useState([]);


  return (
    
    <div>
        {<p>{info.name}</p>}
      <h1>Item</h1>
    </div>
  );
}

export default Item;