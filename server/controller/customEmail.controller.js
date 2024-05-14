

const {customMailService} = require("../service")
exports.customMailService = async(req,res)=>{

    try {
        
        // emailHelper.sendSignUpMail(req);
        const response= await customMailService.customMailService(req);
        
        res.status(200).json({response,success:true, msg: 'Mail Sent Successfully!'});

    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, msg: error.message});
    }

}
