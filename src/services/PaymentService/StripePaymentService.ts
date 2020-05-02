import Stripe from 'stripe';
import {Product} from "../../common/models/product";
import {ProductLineItemAdapter} from "../../adapters/ProductLineItemAdapter";


export default class StripePaymentService {
    private session;
    private stripe;

    constructor() {
        this.stripe = new Stripe(process.env.STRIPE_KEY, null);
    }

    // tslint:disable-next-line:variable-name
    async initPaymentSession(cart: Product[], cancel_url = `${process.env.CLIENT_URL}/payment`): Promise<string> {

        return new Promise(async (resolve, reject) => {
            this.session = await this.stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: cart.map(item => new ProductLineItemAdapter(item)),
                success_url: `${process.env.CLIENT_URL}/payment-successful`, // {CHECKOUT_SESSION_ID}`,
                cancel_url
            });
            resolve(this.session.id)
        })

    }
}