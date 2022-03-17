
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
                return (<div>
                    <div class="col col-xl-3 col-sm-6" >
                     <div class="container1 " >
                       <div onClick={()=>{
                      navigate(`/detail/${hotel.id}`)

                    }}>
                       <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top rounded img1" style={{height:"360px" }} alt="Hollywood Sign on The Hill" />

</div>
  <div class="button1 
"><BsHeart size={45} onClick={()=>{addToWishList(hotel.id)}}/> </div>
                 
                       </div> 
                         {/* <p >
                          <p className='col'onClick={()=>{addToWishList(hotel.id)}}>addToWishList</p>
                         </p> */}
               

                     <div className='row' style={{marginTop:"100px"}}>
                         <div className='col-xl-6 '>
                         <h5 class="card-title" style={{height:"20px"}}> {hotel.hotelName}</h5>
                         </div>
                         <div className='col-xl-6 d-flex flex-row-reverse bd-highlight '>
                           <p className="price">price: {hotel.price}$</p>
                         </div></div>
                   </div>
                   </div>

                )
            })}</div>  


                         

     </div>
    )
}

export default Hotels