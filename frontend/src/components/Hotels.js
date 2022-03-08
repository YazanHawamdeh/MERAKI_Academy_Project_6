
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHotels } from '../reducer/hotels';


const Hotels=()=>{

    const [skip, setSkip] = useState(0);
//   const [page, setPage] = useState(1);
// const dispatch=useDispatch()
// const state=useSelector((state) => {
//     return {
//       token: state.loginReducer.token,
//       hotels: state.hotelsReducer.hotels,
//       isLoggedIn: state.loginReducer.isLoggedIn,
//     };
//   })
     /////////////////////////////////////////////////////////////////////////////////////////////////////
  //  getAllHotel

  const getAllHotels = async () => {
    await axios
      .get(`/hotels/page?skip=${skip}&limit=8`)
      .then((res) => {
        // dispatch(setHotels(res.data.result));

      })
      .catch((err) => {
        throw err;
      });
  };

    return(
        <div class="container">
            <div class="card mb-3 col-xl-4" >
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Hotels