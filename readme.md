# ES6 Gang of Four

An `ECMAScript 2015` implementation of a [DoFactory design patterns examples](http://dofactory.com/javascript/design-patterns).

## Instalation

``` sh
npm install es6-gof
```

## Running

Run the node code below and enjoy!

``` js
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
```
