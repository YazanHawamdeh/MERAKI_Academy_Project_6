import React,{ useEffect, useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { setWishList,deleteWishList } from "../reducer/wishLish";

const WishList =()=>{
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const dispatch =useDispatch()
    const state= useSelector((state)=>{
        return {
            wishList :state.wishListReducer.WishList,
            token:state.loginReducer.token
        }
    })
//=========================================
const getMyWishLists = async () => {
    const headers = {
      Authorization: `Bearer ${state.token}`,
    };
    await axios
      .get("http://localhost:5000/wishList", { headers })

      .then((res) => {
        if (res.data.results.length) {
          dispatch(setWishList(res.data.results));
          setShow(true);
        }
      })
      .catch((err) => {
        setMessage("The Wishlists is empty");
      });
  };

    //=================================================
    const deleteWishListById = async(id)=>{
     await axios.delete(`http://localhost:5000/wishList/${id}`).then((res)=>{
         dispatch(deleteWishList(id))
         getMyWishLists()
     })
    }

    useEffect(() => {
        getMyWishLists();
      }, []);

    return(
        <div class="container-fluid col-11">

            <div className='row mt-5'>

            {show&&state.wishList.map(hotel=>{
                return (
                    <div class="col col-xl-3 col-sm-6">
                     <div class=" ">
                       <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top rounded " style={{height:"360px" }} alt="Hollywood Sign on The Hill"/>
                       <div class="card-body ">
                         <div className='row'>
                         <div className='col-xl-6'>
                         <h5 class="card-title" style={{height:"20px"}}> {hotel.hotelName}</h5>
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
export default  WishList