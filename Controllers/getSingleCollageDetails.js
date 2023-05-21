const Collage = require('../Model/CollageSchema');

exports.getSingleCollage = async(req,res) => {
    try{
        //Fetch the id of the data which is stored in databse from req's parameter
        const {id} = req.params;
        //Searching for object from databse by id
        const details = await Collage.findById(id);
        //If we don't find 
        if(!details){
            res.status(401).json({
                success : false,
                message : 'Details is not Present',
            });
        }
        //Send to Response
        res.status(200).json({
            success : true,
            data : details,
            message : "Details Fetched Successfully",
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