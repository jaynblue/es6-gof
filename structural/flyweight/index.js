'use strict';
const ComputerCollection = require('./computerCollection');
const FlyweightFactory = require('./flyweightFactory');

class FlyweightRunner{
  static run(){
    let computers = new ComputerCollection();
    computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'YOQPT');
    computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'YOQPU');
    computers.add('HP', 'Envy', 'Intel', '4G', 'YOQPUAA');
    computers.add('HP', 'Envy', 'Intel', '2G', 'YOQP1AA');

    console.log(`computers.get('YOQPU').make == computers.get('YOQPT').make == ${computers.get('YOQPU').make == computers.get('YOQPT').make}`)
  }
}

FlyweightRunner.run();

module.exports = FlyweightRunner;
