'use strict';
const Creational = require('./creational');

for(let key in Creational){
  console.log(`${key}:`);
  Creational[key].run();
  console.log('\n');
}
