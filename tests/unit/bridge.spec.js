'use strict'

require('mocha-sinon');
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')


const Screen = require('../../structural/bridge/screen')
const Gestures = require('../../structural/bridge/gestures')
const expect = chai.expect;

chai.use(chaiAsPromised)

describe('Bridge (unit tests)', ()=>{
  describe('when "gestures" imported (unit)', ()=>{
    it('should be a class(function)', ()=>{
      expect(Gestures).to.be.a('function');
    })
  })
})
