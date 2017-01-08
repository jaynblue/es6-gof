'use strict';

class Builder{
  constructor(){
    this.auto = null
  }

  step1(){
    console.log('create a object')
  }

  step2(){
    console.log('insert object parts')
  }

  get(){
    return this.auto;
    // não tem interfaces no es6 então é apenas um exemplo
  }
}

module.exports = Builder;
