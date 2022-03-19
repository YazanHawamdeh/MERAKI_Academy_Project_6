import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCities } from ".././reducer/cities";
import Cities from "./Cities";



const Home = () => {
  // const [skip, setSkip] = useState(0);
  // const [page, setPage] = useState(1);
  // const [elementId, setElementId] = useState([]);

  // const [show1, setShow1] = useState(false);
  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);

  // const navigate = useNavigate();
  // const [show, setShow] = useState(false);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 "
              style={{ height: "50rem" }}
              src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="First slide"
            />
            <Carousel.Caption >
              <div style={{paddingBottom:'300px'}}>
            <h1 style={{display: 'flex',color:"black",fontSize:'70px',}}>GOOD NIGHT</h1>
            <p style={{display: 'flex',color:"black",fontSize:'35px'}}>Find your next stay</p>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}</div>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              style={{ height: "50rem" }}
              src="https://images.pexels.com/photos/6636247/pexels-photo-6636247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
          "
              alt="Second slide"
            />
              <Carousel.Caption style={{paddingBottom:"300px",color:"black",fontSize:'25px'}}>
              <h1 style={{color:"black",fontSize:'60px'}}>FOR MORE CONFORT</h1>
            <p>We have different types of rooms that contain th finest types of furniture and services</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              style={{ height: "50rem" }}
              src="https://images.pexels.com/photos/756076/pexels-photo-756076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
"
              alt="Third slide"
            />

            <Carousel.Caption style={{paddingBottom:"300px",color:"black",fontSize:'25px'}}>
            <h1 style={{color:"black",fontSize:'60px'}}>FOR MORE ENJOYMENT</h1>
            <p>
              We have beautiful places with great views
            </p>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br /> <br />
      <br />
      <Cities />
      <br /> <br />
      <br />
      {/* <h2 className="mb-3  mt-5 mb-5  container-fluid col-11 display-5 fw-bold">
        TOP RAITNG HOTELS
      </h2> */}
      {/* <div
        className="container-fluid col-11 "
        style={{ position: "relative", zIndex: "-1" }}
      >
        <div className="row ">
          <div className="d-block col-sm-12 col-xl-6 ">
            <img
              style={{
                borderRadius: "3%",
                height: "45rem",
                zIndex: "-1",
                position: "relative",
              }}
              className="w-100"
              src="https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
"
              alt="Third slide"
            />

            <div
              className="  container-fluid col-11  display-5 fw-bold "
              style={{
                position: "relative",
                left: "7%",
                bottom: "70%",
                color: "white",
              }}
            >
              Things to do
              <br />
              on your trip
              <br />
              <button
                type="button"
                class="btn btn-light rounded"
                style={{ width: "200px", marginTop: "20px" }}
              >
                Experiences
              </button>
            </div>
          </div>
          <div className="d-block col-sm-12 col-xl-6  ">
            <img
              style={{ borderRadius: "3%", height: "45rem" }}
              className="w-100"
              src="https://images.pexels.com/photos/3293854/pexels-photo-3293854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=240
"
              alt="Third slide"
            />
            <div
              className=" container-fluid col-11 display-5 fw-bold "
              style={{
                position: "relative",
                left: "7%",
                bottom: "70%",
                color: "white",
              }}
            >
              Things to do
              <br />
              on your trip
              <br />
              <button
                type="button"
                class="btn btn-light"
                style={{ width: "200px", marginTop: "20px" }}
              >
                Online Experiences
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="container-fluid col-11">
        <div className="row">
          <div className="col-lg-4 col-sm-4 mb-5   container-fluid col-11 display-5">
            <p
              className="  mb-5"
              style={{ fontSize: "60px", fontWeight: "600" }}
            >
              Shop Airbnb
              <br />
              gift cards
            </p>
            <button
              type="button"
              class="btn btn-dark mb-5 rounded"
              style={{
                padding: "11px 17px",
                fontSize: "20px",
                backgroundColor: "black",
              }}
            >
              Learn more
            </button>
          </div>

          <img
            className="col-lg-8 col-sm-8"
            src="	https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=1200"
          ></img>
        </div>
      </div> */}
      <div className="container-fluid col-11 mt-5 mb-5">
        <div className="row">
          <div
            class="community-banner mt-3 tns-item tns-slide-active col-lg-4 col-sm-4 p-5"
            id="community-banner-item0"
          >
            <img
              src="https://res-console.cloudinary.com/cryptoteam/thumbnails/v1/image/upload/v1647163614/anFraW9pZWtzeHBsbHM4emZzdXU=/preview"
              className="w-100 rounded-circle"
              style={{height:"400px"}}

              alt="error"
            />

            <div class="community-banner-name mt-2">
              <h3 class="ellipsis text-center my-3">Meet Yazan</h3>
              {/* <p
                class="text-center text-gray"
                title="We've used Hyra over a handful of times and it's been great every single time.  Definitely recommend."
              >
                We've used Hyra over a handful of times and it's been great
                every single time. Definitely recommend.
              </p> */}
            </div>
          </div>

          <div
            class="community-banner mt-3 tns-item tns-slide-active col-lg-4 col-sm-4 p-5"
            id="community-banner-item0"
          >
            <img
              src="https://res.cloudinary.com/cryptoteam/image/upload/v1647701291/tfdrts9s9wvnnepfd5qj.jpg"
              style={{height:"400px"}}

              alt="error"
              className="w-100 rounded-circle"
            />

            <div class="community-banner-name mt-2">
              <h3 class="ellipsis text-center my-3">Meet Mohammad</h3>
              {/* <p
                class="text-center text-gray"
                title="We've used Hyra over a handful of times and it's been great every single time.  Definitely recommend."
              >
                We've used Hyra over a handful of times and it's been great
                every single time. Definitely recommend.
              </p> */}
            </div>
          </div>

          <div
            class="community-banner mt-3 tns-item tns-slide-active col-lg-4 col-sm-4 p-5"
            id="community-banner-item0"
          >
            <img
              src="https://res-console.cloudinary.com/cryptoteam/thumbnails/transform/v1/image/upload//v1647701499/b3ZhbXo0ZzBmeXN1a2xhMHFuMnM=/drilldown
              "
               style={{height:"400px"}}
              className="w-100 rounded-circle"
              alt="error"
            />

            <div class="community-banner-name mt-2 ">
              <h3 class="ellipsis text-center my-3">Meet Omar</h3>
              {/* <p
                class="text-center text-gray ml-5"
                title="We've used Hyra over a handful of times and it's been great every single time.  Definitely recommend."
              >
                We've used Hyra over a handful of times and it's been great
                every single time. Definitely recommend.
              </p> */}
            </div>
          </div>
        </div>

        <div class="fluid-container  my-5 bac ">
          <div class="col-md-12 d-flex align-items-center justify-content-center h-100 c">
            <div class="become_host-wrapper">
              <h3 className="ready"> Ready To Earn </h3>
              <div class="text-center">
                {/* <a
                  class="btn btn-link btn-primary mt-3"
                 
                >
                  <h1 class="h4 text-white fw-bold mb-0"
                  
                  > Get Started </h1>
                </a> */}
              </div>
            </div>
          </div>
          {/* <img className='w-100' 
  src='	https://hyra.cron24.com/images/ready_to_host.jpg?5386e7c0841783714ba0e5b5379ad116'></img> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
