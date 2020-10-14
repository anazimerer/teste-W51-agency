import React from 'react'
import model from '../../assets/model.png'
import { ProductContainer, ProductInfos } from '../ProductInfo/style'

export default function ProductInfo() {
    return (
        <ProductContainer>
            <img src={model} alt="model" />
            <ProductInfos>
                <p>Blue Pants</p>
                <div>
                    <span>Quantidade: </span>
                    <select name="select">
                        <option value="valor1" selected>1</option>
                        <option value="valor2" >2</option>
                        <option value="valor3">3</option>
                    </select>
                </div>
                <button>BUY NOW 29.99$</button>
                <button>add to the shopping car</button>
            </ProductInfos>
        </ProductContainer>
    )
}