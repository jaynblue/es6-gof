'use strict'

const output = Symbol();

class Gestures{
  static get errorMessage(){
    return  'missing screen parameter';
  }
  constructor(screen){
    if(!screen){
      let error = new Error(Gestures.errorMessage);
      throw error;
      return error;
    }
    this[output] = screen;
  }

  tap(){
    this[output].click();
  }

  swipe(){
    this[output].move();
  }

  pan(){
    this[output].drag();
  }

  pinch(){
    this[output].zoom();
  }
}

module.exports = Gestures;
