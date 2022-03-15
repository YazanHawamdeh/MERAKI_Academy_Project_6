import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card,Carousel } from "react-bootstrap";
import "./detail.css";
import Rating from "./Rating";

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
  

    <Container   >
    <Row className="col-12">
    <h2 className="ms-2"> <Rating/></h2> 
    </Row >
  <Row >


    <Col >
    
  
      <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: "25rem",width :"40rem" }} >
      {show&&images.map((elemnet)=>{
        return(
          <Carousel.Item interval={3000} >
  <img
    className="d-block w-100 " style={{ height: "25rem" }}
    src={elemnet}
    alt="First slide"

  />

</Carousel.Item>

        )
      })}




</Carousel>

</Col>
<div className="ms-2 mt-1 col-6" style={{ display:"flex",justifyContent:"space-between"} }>
<p className="fs-4" > { show&&hotel[0].description}</p> 
<p className="fs-4"> {show&&hotel[0].price}$/night</p> 
</div>

  </Row>
</Container>
</div>

    
    
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
