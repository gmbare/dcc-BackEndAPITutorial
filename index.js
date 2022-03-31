//Imports
const express = require('express');
const repoContext = require('./repository/repository-wrapper');

const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded)

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
    const id = req.params.id;
    const products = repoContext.products.findProductById(id);
    return(res.send(products))
});

//starting a server
const PORT = process.env.PORT || 5005;


app.listen(PORT, () => {
    console.log(`Server running, Garett! on PORT: ${PORT}`);
});