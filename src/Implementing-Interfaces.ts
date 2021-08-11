import { ShoppingCart } from './interfaces/shopping-cart';
import { calculateTotalAmount } from './interfaces/calculate-total-amount';
import { Order } from './interfaces/order';

const cart = new ShoppingCart();
console.log(`The cart's total is ${calculateTotalAmount(cart)}`);
const order = new Order();
console.log(`The order's total is ${calculateTotalAmount(order)}`);