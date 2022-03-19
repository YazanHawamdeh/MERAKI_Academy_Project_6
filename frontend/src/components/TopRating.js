import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setHotels } from "../reducer/hotels"; 
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const TopRating = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      hotels: state.citiesReducer.hotels,
    };
  });

  //=========================================
  const getTopRating = async () => {
    await axios
      .get("http://localhost:5000/hotels/search_city/4")
      .then((result) => {
        dispatch(setHotels(result.data.result));
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getTopRating();
  }, []);


  //========================================
  return (
      <div className="container-fluid col-11 ">
      <h2 className="mb-3  mt-5 mb-5  display-5 fw-bold">Top Rating</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {state.hotels.map((element) => (
          <Col>
            <Card className="shadow  bg-body rounded">
              <Card.Img
                variant="top"
                src={element.image}
                onClick={() => {
                  navigate(`/hotels`);
                }}
                style={{ cursor: "pointer", height: "300px" }}
              />
              <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
  );
};
export default TopRating;
