import {ILineItem} from "../common/models/ILineItem";
import {Product} from "../common/models/product";

export class ProductLineItemAdapter implements ILineItem {
    amount: number;
    currency: string;
    description: string;
    images: string[];
    name: string;
    quantity: number;
    // tslint:disable-next-line:variable-name
    tax_rates: string[];

    // tslint:disable-next-line:variable-name
    constructor(adaptee: Product, quantity: number = 1, tax_rates: string[] = [], currency: string = "PLN") {
        this.images = [adaptee.image]
        this.name = adaptee.name;
        this.description = adaptee.desc;
        this.amount = adaptee.price;
        this.quantity = quantity;
        this.tax_rates = tax_rates;
        this.currency = currency
    }
}