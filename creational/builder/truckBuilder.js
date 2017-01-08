'use strict';
const Builder = require('./builder');
const Truck = require('./truck');


class TruckBuilder extends Builder{
  constructor(){
    super();
  }

  step1(){
    super.step1();
    this.auto = new Truck();
  }

  step2(){
    super.step2();
    this.auto.addParts();
  }

}

module.exports = TruckBuilder;
