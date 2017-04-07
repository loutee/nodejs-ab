var expect = require('chai').expect;
var tools = require('../lib/tools');
var nock = require('nock');

describe('Tools', function() {

  describe('printName()', function() {
    it('should print the last name first', function() {
      var results = tools.printName({ first: 'Alex', last: 'Banks'});
      expect(results).to.equal('Banks, Alex');
    });
  });

  describe('loadWiki()', function() {

    before(function() {
      nock('https://en.wikipedia.org')
        .get('/wiki/Tommy_Douglas')
        .reply(200, 'Mock Tommy Douglas Page');
    });

    //this.timeout(5000);

    it('Load Tommy Douglas\' wikipedia page', function(done) {
      tools.loadWiki({ first: 'Tommy', last: 'Douglas'}, function(html) {
        //expect(html).to.be.ok;
        expect(html).to.equal('Mock Tommy Douglas Page');
        done();
      });
    });
  });

});
