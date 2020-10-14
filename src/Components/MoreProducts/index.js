import React from 'react'
import product1 from '../../assets/product01.png'
import product2 from '../../assets/product02.png'
import product3 from '../../assets/product03.png'

export default function MoreProducts() {
    return (
        <div>
            <div>
                <img src={product1} alt="model" />
                <span><p>shoes</p><p>23.20 $</p></span>
            </div>
            <div>
                <img src={product2} alt="model" />
                <span><p>shoes</p><p>23.20 $</p></span>
            </div>
            <div>
                <img src={product3} alt="model" />
                <span><p>shoes</p><p>23.20 $</p></span>
            </div>
        </div>
    )
}