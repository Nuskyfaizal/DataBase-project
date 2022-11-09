const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("./db/mongoose");
const { Product } = require("./db/models/productModel");

app.use(bodyParser.json());

//Cors middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.header("Access-Control-Expose-Header", "x-access-token");

  next();
});

app.post("/products", (req, res) => {
  let newProduct = new Product({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    purchasedQty: req.body.purchasedQty,
    soldQty: req.body.soldQty,
    availableQty: req.body.availableQty,
    supplier: req.body.supplier,
    costPrice: req.body.costPrice,
    sellingPrice: req.body.sellingPrice,
  });

  newProduct.save().then((productDoc) => {
    res.send(productDoc);
  });
});

app.get("/products", (req, res) => {
  Product.find({})
    .then((productDoc) => {
      res.send(productDoc);
    })
    .catch((e) => {
      res.send(e.messege);
    });
});

app.get("/products/:productId", (req, res) => {
  Product.findOne({
    id: req.params.productId,
  }).then((oneProduct) => {
    res.send(oneProduct);
  });
});

app.put("/products/:productId", (req, res) => {
  Product.findOneAndUpdate(
    { id: req.params.productId },
    {
      $set: {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        purchasedQty: req.body.purchasedQty,
        soldQty: req.body.soldQty,
        availableQty: req.body.availableQty,
        supplier: req.body.supplier,
        costPrice: req.body.costPrice,
        sellingPrice: req.body.sellingPrice,
      },
    }
  ).then((updatedProduct) => {
    res.send(updatedProduct);
  });
});

app.delete('/products/:productId', (req,res) => {
    Product.findOneAndDelete({
        id: req.params.productId
    }).then((removedDoc) => {
        res.send(removedDoc)
    });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
