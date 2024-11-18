import { Request, Response } from 'express';
import {getAllRevenue} from "../services/revenue.service";

export const getAllRevenueController = async (req: Request, res: Response) => {
    try {
        const revenues = await getAllRevenue();
        res.status(200).json(revenues);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
};