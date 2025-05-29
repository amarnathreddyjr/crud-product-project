let express=require("express");
let app=express();
let baseUrl='/api/products';
app.use(express.json());
let productController=require("./controllers/productController");
// let productModel=require('./models/productSchema');
let mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/crud-prooduct-project-db').then(result=>{
    console.log('connected database crud-prooduct-project-db successfully');
});
// app.post(`${baseUrl}/create`,async(req,res)=>{
//     let bodyData=req.body;
//     console.log('the bodyData reseved for create operation',bodyData);
//     let product=new productModel({
//         name:bodyData.name,
//         price:bodyData.price,
//         description:bodyData.description,
//         category:bodyData.category
//     });
//    let response=await product.save();
//    res.status(201).send(response);
// });
app.post(`${baseUrl}/create`,productController.ceate);
app.get(`${baseUrl}/list`,productController.list);
app.get(`${baseUrl}/read/:id`,productController.read);
app.put(`${baseUrl}/Update/:id`,productController.Update);
app.delete(`${baseUrl}/delete/:id`,productController.delete);

app.listen(3000,()=>{
    console.log("server listening at port 3000");
});
