import React from 'react'
import './Children.css'

export default function Children({item,deleteItem}) {
    return (
        <>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.info}</p>
            <button onClick={()=>deleteItem(item.id)}>删除</button>
        </>
    )
}
