const Collage = require('../Model/CollageSchema');

exports.getAllDetails = async (req,res) => {
    try{
        //Fetching all Data from Database
        const details = await Collage.find({});
        //Send to Response
        res.status(200).json({
            success : true,
            data : details,
            message : "All Details Fetched Successfully",
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
};