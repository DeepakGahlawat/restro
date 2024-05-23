import ErrorHandler from '../error/error.js';
import{Reservation} from "../models/reservationSchema.js";

export const sendReservation=async(req,res,next)=>{
    const { firstName,lastName,email,phone,time,date}=req.body;
    if(!firstName||!lastName||!email||!phone||!date||!time)
        {
            return next(new ErrorHandler("please fill full reservation form!",400));
        }
    try{
        await Reservation.create( {firstName,lastName,email,phone,time,date });
        res.status(200).json({
            success: true,
            message: "Reservation sent  successfully !",
        });
    }catch(error){
       if(error.name=="validationError"){
        const validationErrors = object.values(error.errors).map9((err)=>err.message);
        return next(new ErrorHandler(validationErrors.join(","),400));
    }
     return next(error);
}
}