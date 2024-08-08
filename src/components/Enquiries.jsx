import React, { useEffect, useState } from 'react'
import { getEnquiry } from './api'

const Enquiries = () => {
    const [enquiries,setEnquiry]=useState([])

    useEffect(()=>{
        const fetchEnquiries=async ()=>{
            try {
                const data= await getEnquiry()
                setEnquiry(data)
            } catch (error) {
                console.log(error)
            }
        };
        fetchEnquiries()
    },[])

  return (
    <div>
        <h2>User enquiries</h2>
        {enquiries.map((enq)=>(
            <li key={enq.id}>{enq.courseId}</li>
        ))}
    </div>
  )
}

export default Enquiries