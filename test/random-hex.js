/**
 * @module RandomHexTests
 */

var randomHex = require('../lib/random-hex');
var expect = require('chai').expect;

describe('random-hex', function () {
	context('generate()', function () {
		before(function () {
			this.color1 = randomHex.generate();
			this.color2 = randomHex.generate();
		});

		it('generates a hexadecimal color value', function () {
			var regexp = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

			expect(this.color1).to.match(regexp);
			expect(this.color2).to.match(regexp);
		});

		it('generates a different color each time', function () {
			expect(this.color1).to.not.equal(this.color2);
		});
	});
});
