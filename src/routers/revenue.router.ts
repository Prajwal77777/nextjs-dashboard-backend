import express from 'express';
import {getAllRevenueController} from "../controllers/revenue.controller";

const router = express.Router();
router.get('/revenues', getAllRevenueController);
export default router;