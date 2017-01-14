'use strict'
const User = require('./user');
const DecoratedUser = require('./decoratedUser');


class DecoratedRunner{
  static run(){
    let user = new User('Felizberto');
    user.say();
    let decoratedUser = new DecoratedUser(user, 'da Silva');
    decoratedUser.say();
  }
}

module.exports = DecoratedRunner;
