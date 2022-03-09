
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCities,
  
} from ".././reducer/cities";


const Home=()=>{

  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const [elementId, setElementId] = useState([]);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  
  const [index, setIndex] = useState(0);
 
  
 

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item interval={3000} >
      <h1 style={{z:'20'}}>hiiii</h1>

        <img
          className="d-block w-100 " style={{height:"45rem"}}
          src="https://images.pexels.com/photos/5484912/pexels-photo-5484912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100" style={{height:"45rem"}}
          src="https://images.pexels.com/photos/5104057/pexels-photo-5104057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
          "
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100" style={{height:"45rem"}}
          src="https://images.pexels.com/photos/5104057/pexels-photo-5104057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  


        
    );
}

 export default Home