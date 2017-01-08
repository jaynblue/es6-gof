'use strict';
const Costumer = require('./costumer');
const CostumerPrototype = require('./costumerPrototype');

const proto = new Costumer('n/a', 'n/a', 'pending');
const prototype = new CostumerPrototype(proto);

let costumer = prototype.clone();
costumer.say();
