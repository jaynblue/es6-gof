'use strict';
const Costumer = require('./costumer');
class CostumerPrototype{
  constructor(proto){
    this.proto = proto;
  }

  clone(){
    let costumer = new Costumer();

    costumer.first = this.proto.first;
    costumer.last = this.proto.last;
    costumer.status = this.proto.status;

    return costumer;
  }
}

module.exports = CostumerPrototype;
