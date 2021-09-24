import React from "react";
import {Link} from 'react-router-dom'

function Card({item}) {
    return (
        <div>
            <img src={item.images.showcase} width='70px'/>
            <p> {item.devName} </p>
            <Link to={`/covid/${item.id}`}>
                {item.name}
                {/* {item.description} */}
                {/* {item.images.showcase} */}
            </Link>
        </div>
    )
};

export default Card;