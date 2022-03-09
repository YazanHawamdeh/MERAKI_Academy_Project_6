
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
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=320"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=320
          "
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=320
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