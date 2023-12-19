import React from 'react'
import Products from './Products';


const Home = () => {
    return (
        <>
            <div className="container px-0 product">
                <h1 className='Home_tittle'>DISCOVER OUR PRODUCTS</h1>
                <h6 className='Header'>("Fashion & Clothing is the one makes you look awesome and unique from others!")</h6>
                <hr />
                
                <Products />
            </div>
        </>
    )
}

export default Home;