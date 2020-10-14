import React from 'react'
import model from '../../assets/model.png'

export default function ProductInfo() {
    return (
        <div>
            <div>
                <img src={model} alt="model" />
            </div>
            <div>
                <p>Blue Pants</p>
                <div>
                    <p>Cores</p>
                    <select name="select">
                        <option value="valor1" selected>1</option>
                        <option value="valor2" >2</option>
                        <option value="valor3">3</option>
                    </select>
                </div>
                <button>BUY NOW 29.99$</button>
                <button>add to the shopping car</button>
            </div>
        </div>
    )
}