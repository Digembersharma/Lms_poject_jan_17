import axios from "axios"

export const purchaseCourseApi = async(payload)=>{
    const res = await axios.post('http://localhost:3000/api/payment/checkout',
        payload,
        {
            headers:'Application/json',
            withCredentials:true
        }
    )
    return res.data
}


export const checkOutSuccessApi = async(sessionId)=>{
    const res = await axios.post('http://localhost:3000/api/payment/checkout-success',
        {sessionId},
        {
           headers:'Application/json',
            withCredentials:true  
        }
    )

    return res.data
}