import React from 'react';
import styled from 'styled-components'
import './App.css';
import Header from './Components/Header/index'
import Menu from './Components/Menu/index'
import ProductInfo from './Components/ProductInfo/index'
import MoreProducts from './Components/MoreProducts/index'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FCFAFB;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  `

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

`

function App() {
  return (
    <MainContainer>
      <Header />
      <SecondContainer>
        <Menu />
        <ProductInfo />
      </SecondContainer>
      <MoreProducts />
    </MainContainer>
  );
}

export default App;
