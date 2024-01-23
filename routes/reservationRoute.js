import express from "express";
import { sendReservation, getReservation } from "../controller/reservation.js";
const router = express.Router();

router.post("/send", sendReservation);
router.get("/", getReservation);
export default router;
