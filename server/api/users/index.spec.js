'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var usersCtrlStub = {
  index: 'usersCtrl.index',
  show: 'usersCtrl.show',
  create: 'usersCtrl.create',
  update: 'usersCtrl.update',
  destroy: 'usersCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var usersIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './users.controller': usersCtrlStub
});

describe('Users API Router:', function() {

  it('should return an express router instance', function() {
    usersIndex.should.equal(routerStub);
  });

  describe('GET /api/users', function() {

    it('should route to users.controller.index', function() {
      routerStub.get
        .withArgs('/', 'usersCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/users/:id', function() {

    it('should route to users.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'usersCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/users', function() {

    it('should route to users.controller.create', function() {
      routerStub.post
        .withArgs('/', 'usersCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/users/:id', function() {

    it('should route to users.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'usersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/users/:id', function() {

    it('should route to users.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'usersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/users/:id', function() {

    it('should route to users.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'usersCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
