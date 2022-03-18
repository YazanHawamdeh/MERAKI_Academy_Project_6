import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Modal,Form,Table } from "react-bootstrap";
import "./Admin.css"

const Admin =()=>{
  const [hotels,setHotels]=useState([])
    const [show, setShow] = useState(false);
    const [showTable, setShowTable] = useState(false);
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [hotelName,setHotelName]=useState("")

const [image,setImage]=useState("")
const [image2,setImage2]=useState("")
const [image3,setImage3]=useState("")
const [image4,setImage4]=useState("")
const [image5,setImage5]=useState("")
const [beds,setBeds]=useState("")
const [bedrooms,setBedrooms]=useState("")
const [guests,setGuests]=useState("")
const [bathrooms,setBathrooms]=useState("")
const [description,setDescription]=useState("")
const [price,setPrice]=useState("")
const [city_id,setCity_id]=useState("")

    const createHotel =()=>{
        const body ={
            hotelName,
            image,
            image2,
            image3,
            image4,
            image5,
            guests,
            bedrooms,
            beds,
            bathrooms,
            description ,
            city_id,
            price,
          }
        
        axios.post("http://localhost:5000/hotels",body)

        
        .catch(err=>{
            throw err
        })
    }
    const getHotels= async()=>{
       await axios.get(`http://localhost:5000/hotels/page?skip=0&limit=3`).then((result)=>{
         
        setHotels(result.data.results)
        setShowTable(true)

       }).catch((err)=>{
         throw err
       })
    }

    const deleteHotel =(id)=>{
      axios.put(`http://localhost:5000/hotels/${id}`).then(res=>{
        getHotels()
      })
      .catch(err=>{
        throw err
      })
    }

    useEffect(() => {
      getHotels();
    }, []);
    console.log(hotels);
  
    return (
        <Container className="marginAdmin">
         
        <Button  variant="primary" onClick={handleShow}>
         Create
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton >
            <Modal.Title > Create New Hotel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <Form>
  <Form.Group className="mb-3 ms-4 col-11" >
    
    <Form.Control type="text"  placeholder="hotelName" onChange={(e)=>{setHotelName(e.target.value)}} />
  </Form.Group>
  <div className="image">
  <Form.Group className="mb-3 col-5" >
    
    <Form.Control type="file" placeholder="Image"  onChange={(e)=>{setImage(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3 col-5"  placeholder="Image2">
    
    <Form.Control type="file" placeholder="Image2"  onChange={(e)=>{setImage2(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3 col-5"  placeholder="Image2">
    
    <Form.Control type="file" placeholder="Image3"  onChange={(e)=>{setImage3(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3 col-5"  placeholder="Image4">
    
    <Form.Control type="file" placeholder="Image4"  onChange={(e)=>{setImage4(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3 col-5"  placeholder="Image5">
    
    <Form.Control type="file" placeholder="Image5"  onChange={(e)=>{setImage5(e.target.value)}}/>
  </Form.Group>
  </div>
  <div className="detail">
  <Form.Group className="mb-3 col-3" >
    
    <Form.Control type="number" placeholder="Guests"  onChange={(e)=>{setGuests(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3 col-3" >
    
    <Form.Control type="number" placeholder="bedroom"  onChange={(e)=>{setBedrooms(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3 col-3"  >
    
    <Form.Control type="number" placeholder="Bed"  onChange={(e)=>{setBeds(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3 col-3" >
    
    <Form.Control type="number" placeholder="Bathroom"  onChange={(e)=>{setBathrooms(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3 col-3"  >
    
    <Form.Control type="number" placeholder="City_id"  onChange={(e)=>{setCity_id(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3 col-3"  >
    
    <Form.Control type="number" placeholder="Price"  onChange={(e)=>{setPrice(e.target.value)}}/>
  </Form.Group>
  </div>

  <Form.Group className="mb-3 ms-4 col-11" >
  
    <Form.Control as="textarea" rows={3} placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
  </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" className="col-12" onClick={()=>{createHotel()}}>Create</Button>
          </Modal.Footer>
        </Modal>

        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th>Guests</th>
      <th>Bedrooms</th>
      <th>Bathrooms</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {showTable&&hotels.map((hotel)=>{
      return(
<tr>
      <td>{hotel.id}</td>
      <td>{hotel.hotelName}</td>
      <td>{hotel.guests}</td>
      <td>{hotel.bedrooms}</td>
      <td>{hotel.bathrooms}</td>
      <td>{hotel.price}$/night</td>
      <td><Button variant="danger">Delete</Button></td>
    </tr>
      )
      
      
    })}
    
   
  </tbody>
</Table>
      </Container>
    )
}
export default Admin