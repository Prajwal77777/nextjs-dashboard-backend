import { Request,Response } from "express";
import { getAllCustomers } from "../services/customer.service";

export const getCustomersController = async (req: Request, res: Response) =>{
    try{
        const customers = await getAllCustomers()
        res.status(200).json(customers)
    }catch(error){
        if(error instanceof Error){
            throw new Error(`Failed to get customers${error.message}`)
        }
    }
}