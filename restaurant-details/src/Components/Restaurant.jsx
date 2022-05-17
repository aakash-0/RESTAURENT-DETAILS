import React, { useState } from 'react'
import RestaurantForm from './RestaurantForm'
import RestaurantList from './RestaurantList'
import data from "../db.json"
function Restaurant() {
    const [resData,setResData] = useState(data);
    

    const getData=(prop)=>{
            setResData([...resData,prop]);
            console.log("resData",resData)
    }
  return(
  <div> 
        <RestaurantForm getData = {getData}/>
        {/* <RestaurantList /> */}
        
  </div>  
)}

export default Restaurant