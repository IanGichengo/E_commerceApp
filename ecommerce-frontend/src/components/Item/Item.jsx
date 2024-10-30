import React from 'react'
import './Item.css'

export const Item = (props) => {
    return (
    <div className='Item'>
        <img src={props.img alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                Ksh{props.new_price}
            </div>
            <div className="item-price-old">
                Ksh{props.old_price}
            </div>
        </div>
    </div>
    )
}

export default Item
