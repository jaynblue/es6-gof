'use strict';
const AdvancedShipping = require('./advancedShipping');
const shipping = Symbol();

class ShippingAdapter{
  constructor(){
    this[shipping] = new AdvancedShipping()
  }

  request(zipStart, zipEnd, weight){
    this[shipping].setStart(zipStart);
    this[shipping].setDestination(zipEnd);
    return this[shipping].calculate(weight);
  }
}

module.exports = ShippingAdapter;
