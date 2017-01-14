'use strict';

const Screen = require('./screen');
const Gestures = require('./gestures');

class BridgeRunner{
  static run(){

    let screen = new Screen();
    let gestures = new Gestures(screen);

    gestures.tap();
    gestures.swipe();
    gestures.pan();
    gestures.pinch();

    console.log(screen.getCounts());
  }
}
BridgeRunner.run();
module.exports = BridgeRunner;
