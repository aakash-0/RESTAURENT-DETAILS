import React, { useState } from 'react'
import RestaurantForm from './RestaurantForm'
import RestaurantList from './RestaurantList'
import data from "../db.json"
import '../App.css';
function Restaurant() {
    const [resData,setResData] = useState(data);
    

    const getData=(prop)=>{
            setResData([...resData,prop]);
            console.log("resData",resData)
    }
  return(
  <div className='main-container'> 
        <RestaurantForm  getData = {getData}/>
        <div className='Sorting-block'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
        <div className='restaurentList'>
        {
            resData.map((e,i)=>{
               return <RestaurantList key={i} data = {e} />
            })
           
        }
        </div>
       
        
        
  </div>  
)}

export default Restaurant