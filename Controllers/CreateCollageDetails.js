const Collage = require('../Model/CollageSchema');

exports.CreateCollageDetails = async (req,res) => {
    try{
        //Fetch all informaion from req.body
        const {collage_name,course_name,course_fee,course_duration,accommodation,accommodation_fee} = req.body;
        //Add all those information into databse : Mongo DB
        const response = await Collage.create({
            collage_name,
            course_name,
            course_fee,
            course_duration,
            accommodation,
            accommodation_fee,
        });
        //Send to Response
        res.status(200).json({
            success : true,
            data : response,
            message : "All Details Created Successfully",
        });
    }
    //If something went Wrong
    catch(err){
        console.error(err);
        res.status(500).json({
            success : false,
            message : "Server Isuue Please Try Again",
        });
    }
}