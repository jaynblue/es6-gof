'use strict';
const CarBuilder = require('./carBuilder');
const TruckBuilder = require('./truckBuilder');
const AutoShop = require('./autoShop');

class BuilderRunner{
  static run(){
    var car = AutoShop.build(new CarBuilder());
    var truck = AutoShop.build(new TruckBuilder());

    car.say()
    truck.say()
  }
}

module.exports = BuilderRunner;
