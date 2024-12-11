import userModel from "../models/userModel.js"

//add iteams to user cart
const addToCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cardData = await userData.cardData ;
        if( !cardData[req.body.itemId])
            {
                cardData[req.body.itemId] = 1;
            }
            else{
                cardData[req.body.itemId] += 1;
            }
        await userModel.findByIdAndUpdate(req.body.userId,{cardData});
        res.json({success:true,message:"Added To Cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:`${error}`})
    }
}

//remove items from user cart
const removeFromCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cardData = await userData.cardData;
        if(cardData[req.body.itemId]>0){
            cardData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cardData});
        res.json({success:true,message:"Removed from cart"})
    } catch (error) {
        console.log(err);
        res.json({success:false,message:"Error"})
    }
}

// fetch user cart data
const getCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cardData = await userData.cardData;
        res.json({success:true,cardData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addToCart,removeFromCart,getCart}