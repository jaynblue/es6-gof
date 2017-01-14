'use strict';

class User{
  constructor(name){
    this.name = name;
  }

  say(){
    console.log(`User: ${this.name}`);
  }
}

module.exports = User;
