const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors({
  origin: "https://fullrestaurant.netlify.app"
}));
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Restaurant").then(()=>{
    console.log("✅ MongoDB Connected")
}).catch((erorr)=>{
    console.log(erorr)
})
const menu=require("./model/menu")
const OrderModel = require("./model/OrderModel")
//app.post
app.post("/createmenu",async(req,res)=>{
    try{
        const newData=new menu(req.body)
        const save=newData.save()
        res.send("Menu has been saved successfully!");

    }catch(error){
        console.log(error)
    }
})
app.get("/getmenu",async(req,res)=>{
    const getmenu=await menu.find()
    res.send(getmenu)
})
app.delete("/removeproduct/:id" ,async(req,res)=>{
    try{
        const deleted=await menu.findByIdAndDelete(req.params.id)
        res.send("Product deleted successfully")
    }catch(error){
        console.log(error)
    }
})
//Create order
app.post("/createOrder", async (req, res) => {
  try {
    const { items, address, phone, paymentMethod, paymentProvider } = req.body;

    // Add quantity and lineTotal if not provided
    const itemsWithTotals = items.map(i => ({
      ...i,
      quantity: i.quantity || 1,
      lineTotal: i.price * (i.quantity || 1),
    }));

    const totalAmount = itemsWithTotals.reduce((acc, i) => acc + i.lineTotal, 0);

    const newOrder = new OrderModel({
      items: itemsWithTotals,
      address,
      phone,
      paymentMethod,
      paymentProvider,
      totalAmount,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving order" });
  }
});



app.get("/getOrder",async(req,res)=>{
    const getOrder=await OrderModel.find()
        res.send(getOrder)
})
app.delete("/removeOrder/:id", async (req, res) => {
  try {
    const removedOrder = await OrderModel.findByIdAndDelete(req.params.id);
    if (!removedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    res.status(200).json({ success: true, message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(3000,()=>{
      console.log("✅ Server running")
})
