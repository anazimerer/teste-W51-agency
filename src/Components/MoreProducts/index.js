import React from 'react'
import product1 from '../../assets/product01.png'
import product2 from '../../assets/product02.png'
import product3 from '../../assets/product03.png'
import { MoreProductsContainer } from '../MoreProducts/style'

export default function MoreProducts() {
    const products = [
        {
            image: product1,
            title: "Shoe",
            price: "15.99 $"
        },
        {
            image: product2,
            title: "Bag",
            price: "35.99 $"
        },
        {
            image: product3,
            title: "Bag",
            price: "35.99 $"
        },
    ]

    const listOfProducts = products.map((item) => {
        return (
            <div>
                <img src={item.image} alt={item.title} />
                <span><p>{item.title}</p><p>{item.price}</p></span>
            </div>
        )
    })

    return (
        <MoreProductsContainer>
            {listOfProducts}
        </MoreProductsContainer>
    )
}