import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setCities} from "../reducer/cities/"


const Cities =()=>{
    const dispatch = useDispatch()
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
    <>
    {state.cities.map((element) => {
        return(<p>{element.name}</p>)
        
    })}
    </>)

}
export default Cities