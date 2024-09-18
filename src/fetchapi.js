import React, { useEffect, useState } from "react";


function FetchApi(){
const[array,setArray]=useState([]);

useEffect(()=>{

    try{
    fetch("https://jsonplaceholder.typicode.com/users/")
.then((response)=>response.json())
.then((json)=>{
    setArray(json)
})
    }
    catch(error){
console.log(error)
    }

    console.log(array)
},[])


    return(
        <div>

          
<ul>
           
{
array.map((item)=><li>{item.name},{item.id},{item.address.city}</li>)
}

</ul>
        </div>
    );
}

export default FetchApi;



