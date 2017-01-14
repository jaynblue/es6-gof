'use strict';

class DecoratedUser{
  constructor(user, lastname){
    if(!user){
      throw new Error('Missing parameter \'user\'');
    }
    if(! user.name){
      throw new Error('Invalid user parameter');
    }

    if(!lastname){
      throw new Error('Missing parameter \'lastname\'');
    }

    this.user = user;
    this.lastname = lastname;
  }

  say(){
    console.log(`DecoratedUser: ${this.user.name} ${this.lastname}`);
  }
}

module.exports = DecoratedUser;
