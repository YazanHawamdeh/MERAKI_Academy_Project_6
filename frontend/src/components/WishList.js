import React,{ useEffect, useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { setWishList,deleteWishList } from "../reducer/wishLish";
import Swal from "sweetalert2";
import { BsHeart } from 'react-icons/bs';
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import './hotels.css'



const WishList =()=>{
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const state= useSelector((state)=>{
        return {
            wishList :state.wishListReducer.wishList,
            token:state.loginReducer.token
        }
    })
//=========================================
const getMyWishLists = async () => {
    const headers = {
      Authorization: `Bearer ${state.token}`,
    };
    console.log(headers);
    await axios
      .get("http://localhost:5000/wishList", {headers})

      .then((res) => {
        if (res.data.results.length) {
            console.log(res.data.results);
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
        <div class="container-fluid col-11 ">

            <div className='row '>

            {show&&state.wishList.map(hotel=>{
                return (
                    <div class="col col-xl-3 m-2 col-sm-6 " style={{paddingLeft:"0",paddingRight:"0"}}>
                     <div class="container1 " >
                <div onClick={() => {
                  navigate(`/detail/${hotel.id}`)

                }}>
                  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top rounded img1" style={{ height: "360px" }} alt="Hollywood Sign on The Hill" />

                </div>
                <div class="button1 
"><RiDeleteBinLine size={45} onClick={() => Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {

                    deleteWishListById(hotel.id)
                  }
                })

                  } /> </div>

              </div>


              <div className='row' style={{ marginTop: "80px" }}>
                <div className='col-xl-6 '>
                  <h5 class="card-title" style={{ height: "20px" }}> {hotel.hotelName}</h5>
                </div>
                <div className='col-xl-6 d-flex flex-row-reverse bd-highlight '>
                  <p className="price">price: {hotel.price}$</p>
                </div></div>
                   </div>

                )
            })}</div>                        

     </div>
    )

}
export default  WishList