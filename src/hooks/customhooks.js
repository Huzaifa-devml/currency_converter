import { useState, useEffect } from "react";
function useCurrencyinfo(currency){
    const[data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
           . then((res)=>res.json()).then((res)=>setdata(res.rates))
           //the first res.then() is used to concert it from json format and the next json is used to store it in value
    },[currency])//currency is the dependencies if it changes the useeffect rerenders and runs the function again
    return data;
}
export default useCurrencyinfo;
// use currency info is a custom hook that is used to fetch the information
//it fetches all the exchange rate from the 'from section and store it in a object like{usd;1,inr;83 like this}