'use strict';
let instance = null;
class Singleton{
  constructor(){
    if(!instance){
      instance = this;
    }
    // do anything
    return instance;
  }

  static getInstance(){
    if(!instance){
      instance = new Singleton();
    }
    return instance;
  }
}

module.exports = Singleton;
