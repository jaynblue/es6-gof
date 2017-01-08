'use strict'

class Costumer{
  constructor(first, last, status){
    this.first = first;
    this.last = last;
    this.status = status;
  }

  say(){
    console.log(`Name: ${this.first} ${this.last}, Status: ${this.status}`);
  }
}

module.exports = Costumer;
