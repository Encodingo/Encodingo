import express from 'express';
import {checkout,paymentverification,getkey} from '../Controllers/paymentController.js';
import {isAuthenticated} from "../middlewares/auth.js"

const router=express.Router();
router.route('/checkout').post(checkout);
router.route('/paymentverification').post(paymentverification);

router.route('/getkey').post(getkey);

export default router; 