const { findOneAndUpdate } = require("../models/Product.model");
const productModel = require("../models/Product.model");


class admin {
  static addProduct = async (req, res) => {
    try {
      const newProducts = await productModel.create(
        req.body
      );

   res.send(newProducts)
    } catch (error) {
      res.send({
        apiStatus: false,
        message : error.message
      })
    }
  };
  static delete = async (req , res) => {
    try {
      const deltedItem = await productModel.findByIdAndDelete({
        _id: req.params.id,
      });
      res.send(deltedItem)
    } catch (error) {
      res.send({
        apiStatus:false,
        message:error.message
      })
    }
  };
  static update = async (req, res) => {
    try {
      const updatedProduct = await productModel.findOneAndUpdate(
        { _id:req.params.id },
        
      req.body
        
      );
      res.send(updatedProduct)
    } catch (error) {
        res.send({
            apiStatus:false,
            message:error.message
          })
    }
  };
}

module.exports = admin
