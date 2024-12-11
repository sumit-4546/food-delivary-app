import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Verify1 = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    const verifyPayment = async() => {
        console.log("sumit");
        const responce = await axios.post(url+"/api/order/verify",{success,orderId});
        if(responce.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
        console.log(responce);
    }

    useEffect(()=>{
        console.log("AMIT");
        verifyPayment();
    },[])

  return (
    <div className='verify'>
        <div className='spinner'></div>
        
    </div>
  )
}

export default Verify1