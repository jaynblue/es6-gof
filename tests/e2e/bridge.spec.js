'use strict'

require('mocha-sinon');
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')


const BridgeRunner = require('../../structural/bridge/')
const Screen = require('../../structural/bridge/screen')
const Gestures = require('../../structural/bridge/gestures')
const expect = chai.expect;

chai.use(chaiAsPromised)

describe('Bridge (e2e)', ()=>{
  describe('when imported', ()=>{

    it('should return a class',()=>{
      expect(BridgeRunner).to.be.a('function')
    })

    it('should return a "runner class" (needs an run method)', ()=>[
      expect(BridgeRunner.run).to.be.a('function')
    ])

  })

  describe('when "run" invoked (cant write in console because sinon)', ()=>{

    beforeEach(function(){
      this.consolestub = this.sinon.stub(console,'log');
    });

    it('should "log" create operations', ()=>{
      BridgeRunner.run();

      expect(console.log.called).to.be.true;
    })
  })

  describe('when "gestures" created',()=>{
    it('should not have a public output', ()=>{
      expect(Gestures).to.not.have.property('output');
    })
  })


})
