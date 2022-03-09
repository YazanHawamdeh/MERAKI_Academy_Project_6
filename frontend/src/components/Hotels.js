
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHotels } from '../reducer/hotels';

const Hotels=()=>{

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


  ////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getAllHotels();
  }, [skip]);


    return(
        <div class="container">

            <div className='row'>

            {show&&state.hotels.map(hotel=>{
                return (
                    <div class="col col-xl-4 col-sm-12">
                     <div class="card ">
                       <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
                       <div class="card-body">
                         <h5 class="card-title">Card title : {hotel.hotelName}</h5>
                         <p class="card-text">
                           This is a longer card with supporting text below as a natural lead-in to
                           additional content. This content is a little bit longer.
                         </p>
                       </div>
                     </div>
                   </div>

                )
            })}</div>                        

     </div>
    )
}

export default Hotels