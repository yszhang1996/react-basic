import React, { useState } from 'react'
import Children from './Children'

export default function Communication() {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'hahaha',
            price: '9.9',
            info: '开业大酬宾，买一送一！'
        },
        {
            id: 2,
            name: 'hahaha',
            price: '19.9',
            info: '开业大酬宾，买一送一！'
        },
        {
            id: 3,
            name: 'hahaha',
            price: '29.9',
            info: '开业大酬宾，买一送一！'
        }
    ])
    function deleteItem(id) {
        console.log(id);
        setData(data.filter(item => item.id !== id))
    }
    return (
        <div>
            <div>
                {data.map(item =>
                    <div key={item.id} className='list'>
                        <Children item={item} deleteItem={deleteItem}></Children>
                    </div>
                )}
            </div>
        </div>
    )
}

