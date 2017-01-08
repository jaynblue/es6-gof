'use strict';
const es6Gof = require("es6-gof");
for(let type in es6Gof){
  console.log(`Type of Patterns: ${type}`);
  for(let pattern in es6Gof[type]){
    console.log(`Pattern: ${pattern}`);
    es6Gof[type][pattern].run();
    console.log('\n');
  }
}
