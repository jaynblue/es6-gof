'use strict'

require('mocha-sinon');
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')


const EmployeeFactory = require('../../creational/abstractFactory/employeeFactory');
const VendorFactory = require('../../creational/abstractFactory/vendorFactory');
const expect = chai.expect;

chai.use(chaiAsPromised)

describe('AbstractFactory (unit tests)', ()=>{
  describe('EmployeeFactory (unit)', ()=>{
    it('when required should return an class(function)', ()=>{
      expect(EmployeeFactory).to.be.a('function');
    })

    it('should have an "create" static method', ()=>{
      expect(EmployeeFactory.create).to.be.a('function');
    })


    it('when call "create" with "user" should return an employee "user"', ()=>{
      let cache = console.log;
      console.log = function(){};
      expect(EmployeeFactory.create('user').name).to.equal('user');
      console.log = cache;
    })
  })

  describe('VendorFactory (unit)', ()=>{
    it('when required should return an class(function)', ()=>{
      expect(VendorFactory).to.be.a('function');
    })

    it('should have an "create" static method', ()=>{
      expect(VendorFactory.create).to.be.a('function');
    })


    it('when call "create" with "user" should return an vendor "user"', ()=>{
      let cache = console.log;
      console.log = function(){};
      expect(VendorFactory.create('user').name).to.equal('user');
      console.log = cache;
    })
  })
})
