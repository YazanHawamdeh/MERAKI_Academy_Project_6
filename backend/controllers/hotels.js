const connection = require("../db/db");

const createNewHotels = (req, res) => {
  const query = `INSERT INTO hotels (name,image,image2,image3,image4,image5,description,price) VALUES (?,?,?,?,?,?,?,?)`;
  const { name, image, image2, image3, image4, image5, description, price } =
    req.body;
  const data = [
    name,
    image,
    image2,
    image3,
    image4,
    image5,
    description,
    price,
  ];
  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    res.status(201).json({
      success: true,
      results: results,
    });
  });
};
//===========================================
const getAllHotels = (req, res) => {
  const query = `SELECT * FROM hotels WHERE is_deleted=0`;
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      results: results,
    });
  });
};
//===========================================
const updateHotelsById = (req, res) => {
  const query = `UPDATE hotels SET ? WHERE id=? AND is_deleted=0`;
  const body = req.body;
  const id = req.params.id;
  const data = [body, id];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.json(err);
    }

    res.json(result);
  });
};
//===========================================
const deleteHotelsById = (req, res) => {
  const query = `UPDATE hotels SET is_deleted=1 WHERE id=?`;
  const id = req.params.id;
  connection.query(query, id, (err, result) => {
    if (err) {
      return res.status(404).json({
        success: false,
        massage: `The hotel: ${id} is not found`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      massege: `Succeeded to delete hotel with id: ${id}`,
    });
  });
};
module.exports = {
  createNewHotels,
  getAllHotels,
  updateHotelsById,
  deleteHotelsById,
};
