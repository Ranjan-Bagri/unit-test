var assert = require("assert");
var sum = require("../index.js");
describe('sum',function() {
	describe('add function',function() {
		it('adds nums',function() {
			var res=sum.add(1,1);
			assert.equal(res,2);
		});
	});
});
