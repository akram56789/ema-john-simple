import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Answer from '../Answer/Answer';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])

 

    useEffect(() => {
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                console.log(addedProduct);
            }


        }

    }, [products])
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
      
    }
    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(pd => <Product
                        key={pd.id}
                        product={pd}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>


                </Cart>


            </div>

            <Answer></Answer>
        </div>
    );
};

export default Shop;

