'use strict'

require('mocha-sinon');
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')


const AbstractFactoryRunner = require('../../creational/abstractFactory/')
const expect = chai.expect;

chai.use(chaiAsPromised)

describe('AbstractFactory (e2e)', ()=>{
  describe('when imported', ()=>{

    it('should return a class',()=>{
      expect(AbstractFactoryRunner).to.be.a('function')
    })

    it('should return a "runner class" (needs an run method)', ()=>[
      expect(AbstractFactoryRunner.run).to.be.a('function')
    ])

  })

  describe('when "run" invoked (cant write in console because sinon)', ()=>{

    beforeEach(function(){
      this.consolestub = this.sinon.stub(console,'log');
    });

    it('should "log" create operations', ()=>{
      AbstractFactoryRunner.run();

      expect(console.log.called).to.be.true;
    })
  })


})
