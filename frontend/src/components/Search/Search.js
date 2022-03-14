import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setHotels
} from "../../reducer/hotels";
import { useNavigate } from "react-router-dom";
import { BsHeart, BsCartPlus } from "react-icons/bs";

import "./Search.css";

const Search = ({ hotelName }) => {
  const [elementId, setElementId] = useState([]);

  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const [show, setShow] = useState(0);
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      hotels: state.productsReducer.hotels,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const getHotelByName = async (hotelName) => {
    await axios
      .get(`http://localhost:5000/hotels/search_name?name=${hotelName}`)
      .then((res) => {
        if (!res.data.hotels[0]) {
          setShow(2);
        } else {
          dispatch(setHotels(res.data.hotels));
          setShow(1);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  

  //=======================================
  const addToWishList = async (id) => {
    const headers = {
      Authorization: `Bearer ${state.token}`,
    };

    await axios
      .post(`/wishList/${id}`, {}, { headers })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHotelByName(hotelName);
  }, [hotelName]);

  /////////////////////////////
  const handlecolor = (element) => {
    setElementId([...elementId, element.id]);
  };

  return (
    <div>
      <div>
        <div>
          {show === 1 ? (
           <h1>done</h1>
          ) : show === 2 ? (
            <>
              <img
                className="notFound"
                src="https://res.cloudinary.com/cryptoteam/image/upload/v1644926255/lpowmgomvblf3gcb7exj.svg"
                alt="Not found !!"
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
