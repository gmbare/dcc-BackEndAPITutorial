//Imports
const express = require('express');
const repoContext = require('./repository/repository-wrapper');

const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//Endpoints
//http://localhost:5005/api/products
app.get("/api/products", (req, res) => {
    const products = repoContext.products.findAllProducts();
    console.log(req.headers);
    return( res.send(products))
});

//http://localhost:5005/api/products
app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const products = repoContext.products.findProductById(id);
    return(res.send(products))
});

app.post("/api/products", (req, res) => {
    const newProduct = req.body;
    const addedProduct = repoContext.products.createProduct(newProduct);
    return (res.status(201).send(addedProduct))
});

app.put("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const productPropertiesToModify = req.body;
    const updateProduct = repoContext.products.updateProduct(id, productPropertiesToModify);
    return (res.status(201).send(updateProduct))
});

app.delete("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deleteProduct = repoContext.products.deleteProduct(id);
    return (res.status(201).send(deleteProduct))
});

//starting a server
const PORT = process.env.PORT || 5005;


app.listen(PORT, () => {
    console.log(`Server running, Garett! on PORT: ${PORT}`);
});