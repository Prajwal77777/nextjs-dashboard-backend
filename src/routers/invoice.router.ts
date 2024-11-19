import express from 'express';
import {getInvoiceController} from "../controllers/invoice.controller";

const router = express.Router();
router.get('/invoices',getInvoiceController)
export default router;