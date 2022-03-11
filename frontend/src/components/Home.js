
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCities,

} from ".././reducer/cities";
import Cities from "./Cities";


const Home = () => {

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
    <div>
            <h1 style={{position:"flex",justifyContent:"center",alignItems:"center",zIndex:"1"}}>yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h1>

      <div >

      <Carousel activeIndex={index} onSelect={handleSelect} >

        <Carousel.Item interval={3000} >
          <img
            className="d-block w-100 " style={{ height: "50rem" }}
            src="https://images.pexels.com/photos/5484912/pexels-photo-5484912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"

          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100" style={{ height: "50rem" }}
            src="https://images.pexels.com/photos/5104057/pexels-photo-5104057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
          "
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100" style={{ height: "50rem" }}
            src="https://images.pexels.com/photos/5104057/pexels-photo-5104057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>

      </Carousel></div>
      <Cities />

      <h2 className="mb-3  mt-5 mb-5  container-fluid col-11 display-5 fw-bold">Discover Airbnb Experiences</h2>
      <div className='container-fluid col-11 ' style={{ position: "relative", zIndex: "-1" }}>

        <div className='row '>
          <div className="d-block col-sm-12 col-xl-6 ">
            <img
              style={{ borderRadius: "3%", height: "45rem", zIndex: "-1", position: "relative" }} className="w-100"
              src="https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
"
              alt="Third slide"
            />


            <div className="  container-fluid col-11  display-5 fw-bold " style={{ position: "relative", left: "7%", bottom: "70%", color: "white" }}>Things to do<br />
              on your trip<br />
              <button type="button" class="btn btn-light rounded" style={{ width: "200px", marginTop: "20px" }}>Experiences</button>

            </div>

          </div>
          <div className="d-block col-sm-12 col-xl-6  ">
            <img
              style={{ borderRadius: "3%", height: "45rem" }} className="w-100"
              src="https://images.pexels.com/photos/3293854/pexels-photo-3293854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=240
"
              alt="Third slide"
            />
            <div className=" container-fluid col-11 display-5 fw-bold " style={{ position: "relative", left: "7%", bottom: "70%", color: "white" }} >Things to do<br />
              on your trip<br />
              <button type="button" class="btn btn-light" style={{ width: "200px", marginTop: "20px" }}>Online Experiences</button>

            </div>

          </div>

        </div></div>

        {/* iiiiiiiiiiiiiiiii */}

        <div className='container-fluid col-11'>
<div className='row'>
  
  <h1 className='col-lg-4'>Shop Airbnb<br/>
gift cards</h1>
        <div className='col-lg-8 '><picture><source srcset="https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=1200 1x, https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=2560 2x" media="(min-width: 1440px)"/><source srcset="https://a0.muscache.com/im/pictures/204eea7c-fd71-4316-b056-7e2cc664351d.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/204eea7c-fd71-4316-b056-7e2cc664351d.jpg?im_w=1440 2x" media="(min-width: 744px)"/><img 
       className='w-100' aria-hidden="true" alt="" src="https://a0.muscache.com/im/pictures/09c5b264-32db-4168-8204-9ce035c1b6ef.jpg?im_q=highq&amp;im_w=720" elementtiming="LCP-target" /></picture></div>

        </div></div>
    </div>

  );
}

export default Home