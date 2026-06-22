import React from 'react';
import { useEffect, useState } from 'react'; 
import { useLoaderData } from 'react-router-dom'; // useLoaderData is a hook provided by react router dom to get the data from the loader and use it in our component

function Github() {
    // const [data,setData] = useState([]);

    const data = useLoaderData(); // useLoaderData returns the data from the loader and we can use it in our component

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/ImFocused")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)})
    // }, []);

    // Instead of doing all those things above with the help of reaact router dom we can directly use LOADER Data where whenever we just hover the link the data will be fetched in cache increasing optimization and reducing time buffer 

    // and theres a hook for this linking useLoaderData which we can use to get the data from the loader and use it in our component

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

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/ImFocused");
    const data = await response.json();
    return data;
}