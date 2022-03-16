import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card,Carousel } from "react-bootstrap";
import "./detail.css";
import Rating from "./Rating";
import Comment from "../Comment";
import { FaBed } from 'react-icons/fa'
import { MdPerson,MdBathroom,MdBedroomParent,MdPriceChange } from "react-icons/md";


const Detail = () => {
  let { id } = useParams();
  const [hotel, setHotel] = useState([]);
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const getHotel = async () => {
    await axios
      .get(`http://localhost:5000/hotels/search_id/${id}`)
      .then((res) => {
        setHotel(res.data.result);
        setImages([
          res.data.result[0].image,
          res.data.result[0].image2,
          res.data.result[0].image3,
          res.data.result[0].image4,
          res.data.result[0].image5,
        ]);

        setShow(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHotel();
  }, []);

  
  const [index, setIndex] = useState(0);




  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  console.log(images);

  return ( 
<div  className="container-fluid col-11" style={{ marginTop: "100px" }}>
    <Container fluid >
  <Row>
    <Col >
    <Carousel  activeIndex={index} onSelect={handleSelect} style={{ height: "25rem",width :"40rem" }} >
      {show&&images.map((elemnet)=>{
        return(
          <Carousel.Item interval={3000} >
  <img
    className="d-block w-100 " style={{ height: "25rem",borderRadius:"8px" }}
    src={elemnet}
    alt="First slide"

  />

</Carousel.Item>

        )
      })}




</Carousel>

    </Col >
    
    {show&& <Col className="details shadow bg-white rounded">
    <div className="center">  <p  className="fs-4 mt-2 ms-3 mb-3 center">{ hotel[0].hotelName} </p></div> 
   <p className="fs-4 ms-3" ><Rating/></p> 
   <p className="fs-4 ms-3" > <MdPerson/> { hotel[0].guests} Guests</p>
   <p className="fs-4 ms-3">  <MdBedroomParent/> { hotel[0].bedrooms} Bedrooms</p>
   <p className="fs-4 ms-3"><FaBed/> { hotel[0].beds} Beds</p>
   <p className="fs-4 ms-3"><MdBathroom/> { hotel[0].bathrooms} Bathrooms</p>
   <p className="fs-4 ms-3"><MdPriceChange/> { hotel[0].price} $/Night</p>
   </Col>
   }
   
    
  </Row>
  
</Container>
</div>
// 
  

//     <Container   >
//     <Row className="col-12">
//     <h2 className="ms-2"> <Rating/></h2> 
//     </Row >
//   <Row >


//     <Col >
    
  

// </Col>
// {show&&<div className="ms-2 mt-1 col-6" style={{ display:"flex",justifyContent:"space-between"} }>
// <p className="fs-4" > { hotel[0].guests} { hotel[0].bedrooms} {hotel[0].beds}  { hotel[0].bathrooms}</p> 
// <p className="fs-4"> {hotel[0].price}$/night</p> 
// </div>}


//   </Row>
//   <Comment id={show&&hotel[0].id} />

// </Container>
// </div>

    
    
    // <Container fluid col-11>
    //   <Row className="g-4">
    //     <Col  lg={2} >
    //       <img src={show&&hotel[0].image} style={{ height: "300px"}} alt="" />
    //     </Col >
    //     {images.map((element) => (
    //       <Col col-xl-3 col-sm-6 d-flex-wrap >
    //         <Card className="shadow  bg-body rounded" >
    //           <Card.Img
    //             variant="top"
    //             src={element}
    //             style={{ height: "150px" }}
    //           />
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
    //     <div class="container-fluid col-11">

    //         <div className='row mt-5'>

    //         {hotel.map(hotel=>{
    //             return (
    //                 <div class="col col-xl-3 col-sm-6">
    //                  <div class=" ">
    //                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top rounded " style={{height:"360px" }} alt="Hollywood Sign on The Hill"/>
    //                    <div class="card-body ">
    //                      <div className='row'>
    //                      <div className='col-xl-6'>
    //                      <h5 class="card-title" style={{height:"20px"}}> {hotel.hotelName}</h5>
    //                      </div>
    //                      <div className='col-xl-6 d-flex flex-row-reverse bd-highlight '>
    //                        <p >price: {hotel.price}</p>
    //                      </div></div>
    //                      <p >
    //                       <p className='col'>{hotel.description}</p>
    //                      </p>
    //                    </div>

    //                  </div>
    //                </div>

    //             )
    //         })}</div>

    //  </div>
  );
};
export default Detail;
