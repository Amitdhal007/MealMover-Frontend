import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='header-contents'>
                    <h2>Order your favourite food here</h2>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                    <button>View Menu</button>
                </div>
            </div>

            <div className='offer-card-heading'>
                <h1>
                Some top offers 
                </h1>
                <p className='offer-card-desc'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            </div>

            <div className='header-cards'>
                <div className='header-card1'>
                    <img src="/card-image1.jpg" alt="Card Image 1" />
                </div>
                <div className='header-card2'>
                    <img src="/card-image2.jpg" alt="Card Image 2" />
                </div>
                <div className='header-card3'>
                    <img src="/card-image3.jpg" alt="Card Image 3" />
                </div>
                <div className='header-card4'>
                    <img src="/card-image4.jpg" alt="Card Image 4" />
                </div>
            </div>
        </div>
    )
}

export default Header
