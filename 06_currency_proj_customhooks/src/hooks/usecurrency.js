import { useEffect,useState } from "react";

function useCurrencyinfo(currency){ 
    useEffect(()=>{

        const[data,setData] = useState({});

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())   // convert the response to json format
        .then((res)=> setData(res[currency]))  // setdata is a function which will get the data from the api
        console.log(data);
       

    },[currency])   // currency is a dependency as we want to fetch the fn wheneveer the currency value changes

}