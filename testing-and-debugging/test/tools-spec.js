var expect = require('chai').expect;
var tools = require('../lib/tools');

describe('Tools', function() {

  describe('printName()', function() {
    it('should print the last name first', function() {
      var results = tools.printName({ first: 'Alex', last: 'Banks'});
      expect(results).to.equal('Banks, Alex');
    });
  });

  describe('loadWiki()', function() {

    this.timeout(5000);

    it('Load Tommy Douglas\' wikipedia page', function(done) {
      tools.loadWiki({ first: 'Tommy', last: 'Douglas'}, function(html) {
        expect(html).to.be.ok;
        done();
      });
    });
  });

});
