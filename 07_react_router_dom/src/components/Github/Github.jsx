import React from 'react';
import { useEffect, useState } from 'react'; 

function Github() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users/ImFocused")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)})
    }, []);

    return (
        <div className= " text-center m-4 bg-gray-700 text-3xl text-white p-4" >
            Github Username : {data.login}
            <br></br>
            Github Followers : {data.followers}
            <br></br>
            Github Repos : {data.public_repos}
            <img src={data.avatar_url} alt="Avatar" className="rounded-full w-16 h-16 mx-auto" />
        </div>
    ) 

}
export default Github;