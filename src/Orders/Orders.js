import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import { removeFromDb } from '../utilities/fakedb';
import './Orders.css';

const Orders = () => {
    const [products, setProducst] = useProducts();
    const [cart, setCart] = useCart(products)

    const  handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);    
        removeFromDb(product.id)
    }
    return (
        <div className="shop-container">
            <div className="review-items-container">
             {
                 cart.map(product => <ReviewItem
                 key={product.id}
                 product={product}
                 handleRemoveProduct={handleRemoveProduct}
                 ></ReviewItem>)
             }
             


            </div>
            <div className="cart-container">

                <Cart cart={cart}>
                    <Link to="/inventory">
                        <button>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>

        </div>
   
    );
};

export default Orders;