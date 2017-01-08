'use strict';
const Factory = require('./factory');
const Vendor = require('./vendor');


class VendorFactory extends Factory{
  static create(name){
    super.create(name);
    return new Vendor(name);
  }
}

module.exports = VendorFactory;
