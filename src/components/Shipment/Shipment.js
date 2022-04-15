import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('');
    // const navigate = useNavigate()

    const handleNameBlur = event => {
        setName(event.target.value);

    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneNumberBlur = event => {
        setPhone(event.target.value)
    }
    // if (user) {
    //     navigate('/shop')
    // }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Your Shipping Info</h2>
                <form onSubmit={handleCreateUser} >
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name"> Your Email</label>
                        <input  value={user?.email} readOnly type="email" name='name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone"> Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type=" number" name='phone' required />
                    </div>
                    <p style={{ color: "red" }}>
                        {error}
                    </p>
                    <input className='form-submit' type="submit" value=' Add Shipping' required />

                </form>


            </div>

        </div>

    );
};

export default Shipment;