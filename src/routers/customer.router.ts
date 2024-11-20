import express from "express";
import {getCustomersController} from "../controllers/customer.controller";

const router = express.Router();
router.get("/customers",getCustomersController);
export default router;