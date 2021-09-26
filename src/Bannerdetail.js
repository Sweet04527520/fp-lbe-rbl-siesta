import React, { useState, useEffect } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Item() {
    const url = useParams().id;
    console.log(url);
    // const [info, setInfo] = useState([]);
    const [info, setInfo] = useState(null);
    useEffect(() => {
      cobaGet();
    }, []);
    const cobaGet = () => {axios.get(`https://fortnite-api.com/v1/playlists/${url}`).then(value=>setInfo(value.data.data))};
    if(!info) return null;
  // useEffect(() => {
  //     console.log("yeyy");
  //     axios.get(`https://fortnite-api.com/v1/playlists/${url}`).then(value=>setInfo(value.data));
  //     console.log(info);
  // }, []);

  // const [items, setItems] = useState([]);


  return (
    
    <div>
        <h1>{info.name}</h1>
        {/* {<p>{info.gameType}</p>} */}
        {/* {<p>{info.description}</p>} */}
        {/* <p>{info.images.showcase}</p> */}
        <img src={info.images.showcase} width='800px'/>
        <p>{info.description}</p>
        {/* {<p>{info.images.showcase}</p>} */}
      {/* <h1>Item</h1> */}
    </div>
  );
}

export default Item;