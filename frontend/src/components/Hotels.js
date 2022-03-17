
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHotels } from '../reducer/hotels';
import { useNavigate } from 'react-router-dom';
import Comment from './Comment';
import './hotels.css'
import { BsHeart } from 'react-icons/bs';


const Hotels=()=>{
const navigate =useNavigate()
    const [skip, setSkip] = useState(0);
//   const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);

const dispatch=useDispatch()
const state=useSelector((state) => {
    return {
      token: state.loginReducer.token,
      hotels: state.hotelsReducer.hotels,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  })
     /////////////////////////////////////////////////////////////////////////////////////////////////////
  //  getAllHotel

  const getAllHotels = async () => {
    await axios
      .get(`http://localhost:5000/hotels`)
      .then((res) => {
        dispatch(setHotels(res.data.results));
        console.log(res);
        setShow(true)

      })
      .catch((err) => {
        throw err;
      });
  };

  const addToWishList = async (id) => {
    const headers = {
      Authorization: `Bearer ${state.token}`,
    };
console.log(headers);
    await axios
      .post(`http://localhost:5000/wishList/${id}`, {}, { headers })
      .then((res) => {
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  ////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getAllHotels();
  }, [skip]);


    return(
        <div class="container-fluid col-11">

            <div className='row mt-5'>

            {show&&state.hotels.map(hotel=>{
                return (
                    <div class="col col-xl-3 col-sm-6" >
                     <div class="container1 " >
                       <div onClick={()=>{
                      navigate(`/detail/${hotel.id}`)

                    }}>
                       <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top rounded img1" style={{height:"360px" }} alt="Hollywood Sign on The Hill" />

</div>
  {/* <div class="overlay"></div> */}
  <div class="button1 
"><BsHeart size={45} /> </div>
                       {/* <div class="card-body " style={{  boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)"
}}>
                         <div className='row'>
                         <div className='col-xl-6'>
                         <h5 class="card-title" style={{height:"20px"}}> {hotel.hotelName}</h5>
                         </div>
                         <div className='col-xl-6 d-flex flex-row-reverse bd-highlight '>
                           <p >price: {hotel.price}</p>
                         </div></div>
                      
                       </div> */}
               
                     </div>

                     <div className='row' style={{marginTop:"100px"}}>
                         <div className='col-xl-6'>
                         <h5 class="card-title" style={{height:"20px"}}> {hotel.hotelName}</h5>
                         </div>
                         <div className='col-xl-6 d-flex flex-row-reverse bd-highlight '>
                           <p >price: {hotel.price}$</p>
                         </div></div>
                   </div>

                )
            })}</div>  


                               {/* <div class="container">
  <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
  <p class="title">card title</p>
  <div class="overlay"></div>
  <div class="button"><a href="#"> BUTTON </a></div>
</div>                       */}

     </div>
    )
}

export default Hotels