import {useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data,setData] = useState({});//used for chaging the value of "data" whenever a new call currreny entered
    const url = 
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    //useEffect is used for inoving uniformed call of the call back funtion for the change in currency

    return data;
}

export default useCurrencyInfo;
//export the whole funtion 