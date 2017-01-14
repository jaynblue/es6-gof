'use strict';
const Component = require('./component');
const Leaf = require('./leaf');

class CompositeRunner{
  static run(){
    const root = new Component('root');
    const left = new Component('left');
    const right = new Component('right');

    root.addLeaf(new Leaf(1));
    root.addLeaf(new Leaf(2));

    left.addLeaf(new Leaf(3));
    left.addLeaf(new Leaf(4));

    right.addLeaf(new Leaf(5));
    right.addLeaf(new Leaf(6));

    root.addChild(left);
    root.addChild(right);
  }
}
