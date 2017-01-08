'use strict';
const Shipping = require('./shipping');
const ShippingAdapter = require('./shippingAdapter');

class AdapterRunner{
  static run(){
    let shipping = new Shipping();
    let credentials = {userKey: 'es6-gof'};
    let adapter = new ShippingAdapter(credentials);

    let shippingCost = shipping.request();
    let shippingAdapterCost = adapter.request();

    console.log(`Shipping Cost: ${shippingCost}`);
    console.log(`Shipping Adapter Cost: ${shippingAdapterCost}`);
  }
}

module.exports = AdapterRunner;
