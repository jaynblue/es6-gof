'use strict';

const elements = Symbol();
const leafs = Symbol();
const privateName = Symbol();
class Component{
  constructor(name){
    this[elements] = [];
    this[leafs] = [];
    this[privateName] = name;
  }

  addLeaf(leaf){
    this[leafs].push(leaf)
  }

  removeLeaf(leaf){
    let position = this[leafs].indexOf(leaf);
    if(position == -1){
      throw new Error('Child not found');
    }
    this[leafs].slice(position, 1);
  }

  getLeaf(index){
    return this[leafs][index];
  }

  hasLeaf(){
    return this[leafs].lenght > 0;
  }

  addChild(child){
    this[elements].push(child);
  }

  removeChild(child){
    let position = this[elements].indexOf(child);
    if(position == -1){
      throw new Error('Child not found');
    }
    this[elements].slice(position, 1);
  }

  getChild(index){
    return this[elements][index];
  }

  hasChild(){
    return this[elements].length != 0;
  }

  get name(){
    return this[privateName];
  }

}

module.exports = Component;
