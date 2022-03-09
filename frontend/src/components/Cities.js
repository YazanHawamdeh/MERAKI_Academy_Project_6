import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCities } from "../reducer/cities/";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const Cities = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      cities: state.citiesReducer.cities,
    };
  });

  //=========================================
  const getAllCities = async () => {
    await axios
      .get("http://localhost:5000/cities/nolimit")
      .then((result) => {
        dispatch(setCities(result.data.result));
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getAllCities();
  }, []);

  console.log(state.cities.length);
  //========================================
  return (
    <Container>
      <h2 className="mb-3  mt-3">Inspiration for your next trip</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {state.cities.map((element) => (
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
    </Container>
  );
};
export default Cities;
