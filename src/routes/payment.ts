import {Router} from "express";
import StripePaymentService from "../services/PaymentService/StripePaymentService";
import activeServices from "../services/activeServices";

const router = Router();
const productService = activeServices.getProductService();

router.post("/create-session", async (req, res, next) => {
    if (!req.body.productIds)
        throw new Error("No 'productIds' provided")
    try {
        const defaultCancelUrl = `${process.env.CLIENT_URL}/payment`
        const products = await productService.getByArrayOfIds(req.body.productIds);
        const sessionId = await new StripePaymentService().initPaymentSession(products, req.body.cancelUrl ? req.body.cancelUrl : defaultCancelUrl)
        return res.status(200).json(sessionId)
    } catch (error) {
        next(error)
    }
});

export default router;
