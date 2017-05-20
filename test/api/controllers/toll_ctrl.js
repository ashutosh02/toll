var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('toll controllers', function() {

    describe('/api/tollCalculation', function() {

      it('toll calculation', function(done) {

        request(server)
          .post('/api/tollCalculation')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400)
          .end(function(err, res) {
            should.not.exist(err);
            done();
          });
      });

    });

  });

});
