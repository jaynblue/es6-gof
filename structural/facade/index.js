'use strict';
const Mortgage = require('./mortgage');

class FacadeRunner{
  static run(){
    let mortgage = new Mortgage('João da Silva');

    console.log(mortgage.applyFor(500.00));
  }
}
FacadeRunner.run();

module.exports = FacadeRunner;
