
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
        <div class="container-fluid col-11">

            <div className='row mt-5'>

            {show&&state.hotels.map(hotel=>{
                return (
                    <div class="col col-xl-3 col-sm-6">
                     <div class=" ">
                       <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top rounded" alt="Hollywood Sign on The Hill"/>
                       <div class="card-body ">
                         <div className='row'>
                         <div className='col-xl-6'>
                         <h5 class="card-title"> {hotel.hotelName}</h5>
                         </div>
                         <div className='col-xl-6 d-flex flex-row-reverse bd-highlight '>
                           <p >price: {hotel.price}</p>
                         </div></div>
                         <p >
                          <p className='col'>{hotel.description}</p>
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