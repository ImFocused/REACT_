import React from 'react';
import { useParams } from 'react-router-dom'; // useParams is a hook provided by react router dom to get the parameters from the url

export default function Users() {
    const {userid} = useParams(); // useParams returns an object with the parameters from the url and we can destructure it to get the specific parameter we want
    return (
        <div className="text-center bg-gray-700 text-3xl text-white p-4" >
            User : {userid}
        </div>
    )
}