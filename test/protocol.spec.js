var protocol = require('../lib/protocol');
describe('Protocol', function() {
	it('should be not null', function() {
		console.log(protocol.BreedEnum.Cra);
		expect(protocol).not.toBe(null);
	});
});