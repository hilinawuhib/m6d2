import express from 'express';
import productsRoutes from './services/products.js';
const server = express();
const { PORT =3002} = process.env;
server.use(express.json());
server.use("/products",productsRoutes)
server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})
server.on("error", (error) => {
    console.log(`Server is stopped : ${error}`);
  });