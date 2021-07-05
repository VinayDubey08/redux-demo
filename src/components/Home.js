

import React from 'react'

export default function Home() {
    return (
        <div>
            <h4>home componentes</h4>
            <div className="add-to-cart">
                <span className="cart-count"></span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button >
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
