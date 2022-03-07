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
module.exports={
    createNewHotels
}
