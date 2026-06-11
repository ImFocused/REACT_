import { useEffect,useState } from "react";

function useCurrencyinfo(currency){
    
    const[data,setData] = useState({});
    useEffect(()=>{ //here useeffect is used to fetch the data from the api whenever the currency value changes

        

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())   // convert the response to json format as it comes in string format
        .then((res)=> setData(res[currency]))  // setdata is a function which will get the data from the api
        console.log(data);
       

    },[currency])   // currency is a dependency as we want to fetch the fn wheneveer the currency value changes
    console.log(data);
    return data;

}
export default useCurrencyinfo;