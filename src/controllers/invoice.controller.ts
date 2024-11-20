import {Request, Response} from "express";
import {getAllInvoices} from "../services/invoice.service";

export const getInvoiceController = async (req: Request, res: Response) => {
    try {
        const invoices = await getAllInvoices();
        res.status(200).json(invoices);
    }catch(err){
        if (err instanceof Error) {
            throw new Error(`Error fetching invoices${err.message}`);
        }
    }
}