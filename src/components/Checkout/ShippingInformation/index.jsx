import { useRef } from 'react'
import { useContext } from 'react'
import './ShippingInformation.scss'
import Context from '../../../context/Context'
import { GiConfirmed } from "react-icons/gi";
import { Link } from 'react-router-dom';

const ShippingInformation = () => {
    const {addBuyer} = useContext(Context)

    const ref = useRef()
    const handleSubmit = () => {
        const formData = new FormData(ref.current)
        const buyer = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            country: formData.get('country'),
            state: formData.get('state'),
            city: formData.get('city')
        }
        addBuyer(buyer)
    }
    return(
        <div className="shippingInformation">
            <p>Shipping Information</p>
            <form ref={ref} className='shippingInformation--form'>
                <input type='text' placeholder='First Name' name='firstName' required='required' />
                <input type='text' placeholder='Last Name' name='lastName' />
                <input type='text' placeholder='Email' name='email'/>
                <input type='text' placeholder='Phone' name='phone'/>
                <input type='text' placeholder='Country/Region' name='country'/>
                <input type='text' placeholder='State' name='state'/>
                <input type='text' placeholder='City' name='city'/>
            </form>
            <Link to='/summary'>
            <div onClick={handleSubmit} className='shippingInformation--submit'>
                <GiConfirmed/>
                <p>Confirm</p>
            </div>
            </Link>
        </div>
    )
}

export default ShippingInformation
