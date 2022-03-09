import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setCities} from "../reducer/cities/"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Cities =()=>{
    
    const dispatch = useDispatch()
    
  const navigate = useNavigate();
    const state = useSelector((state)=>{
        return{
            cities:state.citiesReducer.cities
        }
    })

    
    //=========================================
    const getAllCities = async()=>{
      await  axios.get("http://localhost:5000/cities/nolimit").then((result)=>{
            dispatch(setCities(result.data.result))
        })
        .catch(err=>{
            throw err
        })
    }
    useEffect(() => {
        getAllCities();
      }, []);
    
     console.log(state.cities.length)
    //========================================
    return(

 <div class="container">
<h2 class="mb-3  mt-3">Inspiration for your next trip</h2>
  <div class="row">
  {state.cities.map((element) => {
        return(
    <div class="col col-xl-3">
    
            <div class="card  shadow  bg-body rounded ho">
  <img src="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=320" class="card-img-top" alt="..." onClick={()=>{navigate(`/hotels`)}} style={{cursor:'pointer'}}/>
  <div class="card-body">
    <p class="card-text">{element.name}</p>
    <p class="card-text">{element.description}</p>
  </div>
</div>
     
    </div>
       ) 
        
    })}
    
  </div>
</div> 




    )

}
export default Cities