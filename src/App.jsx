import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Context/CartProvider'
import NavigationComponent from './Components/NavigationComponent/NavigationComponent'
import HomeComponent from './Components/HomeComponent/HomeComponent';

const App = () => {
    return (
        <CartProvider>
            <NavigationComponent />
            <HomeComponent />
        </CartProvider>
    )
}

export default App;