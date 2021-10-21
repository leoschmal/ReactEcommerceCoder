import React, { useState } from "react";
import './Item.css'

export const Item = ({item}) =>{
    return(
        <div className="itemCard">
            <h3> {item.titulo} </h3>
            <img className="imgCard" src = {item.url} alt="..." />
            <h4>${item.precio}.-</h4>
            <h4>Código:{item.id}</h4>

        </div>
        )
}