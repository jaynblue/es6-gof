'use strict';

const count = Symbol();

class Screen{
  constructor(){
    this[count] = {};
    this[count].click = 0;
    this[count].move = 0;
    this[count].drag = 0;
    this[count].zoom = 0;
  }

  click(){
    this[count].click++;
  }

  move(){
    this[count].move++;
  }

  drag(){
    this[count].drag++;
  }

  zoom(){
    this[count].zoom++;
  }

  getCounts(){
    return this[count];
  }
}

module.exports = Screen;
