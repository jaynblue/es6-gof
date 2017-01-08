const Singleton = require('./singleton');
class SingletonRunner{
  static run(){
    let singleton = new Singleton();

    if(singleton == new Singleton()){
      console.log('singleton == new Singleton');
    }
    if(singleton == Singleton.getInstance()){
      console.log('singleton == a singleton instance');
    }
  }
}

module.exports = SingletonRunner;
