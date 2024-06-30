import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data,setData] = useState([]);
    function GitHub() {
        useEffect(() => {
            fetch(`https://api.github.com/users/harsh007`)
            .then(response => response.json())
            .then(
                data => {
                    setData(data)
                }
            )
        })
    }
    console.log(data.avatar_url);

    return (
        <>
           <div className='text-center  bg-gray-600 text-white p-4 text-3xl'>
                <img width={300} src= ""alt="Harsh" />
               
                <h1>{data.login}</h1>
                <h1>{data.id}</h1>
           </div>
        </>
    )
}

export default GitHub
