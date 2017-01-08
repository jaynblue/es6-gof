'use strict'

class AutoShop{
  static build(builder){
    builder.step1();
    builder.step2();
    return builder.get();
  }
}

module.exports = AutoShop;
