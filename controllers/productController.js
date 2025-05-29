let productModel=require('../models/productSchema');
let productController={
  ceate: async(req,res)=>{
    let bodyData=req.body;
    console.log('the bodyData reseved for create operation',bodyData);
    let product=new productModel({
        name:bodyData.name,
        price:bodyData.price,
        description:bodyData.description,
        category:bodyData.category
    });
   let response=await product.save();
   res.status(201).send(response);
},
list: async(req,res)=>{
    let response=await productModel.find();
   res.status(200).send(response);

},
read:async(req,res)=>{
    let reqId=req.params.id;
    let response=await productModel.findOne({_id:reqId});
    res.status(200).send(response);
},
Update:async(req,res)=>{
  let reqId=req.params.id;
  let reqBody=req.body;
  let response=await productModel.updateOne(
    {_id:reqId},
    {$set:reqBody}
  );
res.status(200).send(response);
},
delete:async(req,res)=>{
    let reqId=req.params.id;
    let response=await productModel.deleteOne({_id:reqId});
    res.status(200).send(response);
},

};
module.exports=productController;


// update:async(req,res)=>{
//                 let reqId=req.params.id;
//                 let reqBody=req.body;
//                 let response=await productModel.updateOne(
//                     {_id:reqId},
//                     {$set:reqBody},

//                 );
//                 res.status(CONSTANT.STATUS_CODE.SUCESS).send(response);
            
//                 },
