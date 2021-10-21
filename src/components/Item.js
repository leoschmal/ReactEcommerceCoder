import React, { useState } from "react";
import './Item.css'

export const Item = ({item}) =>{
    return(
        <div className="itemCard">
            <div> {item.title} </div>
            <img scr={item.url} alt=".." />
            <h4>{item.precio}</h4>
            <h4>{item.id}</h4>

        </div>
        )
}