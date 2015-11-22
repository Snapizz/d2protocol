var Protocol = require('../lib/protocol');
var ByteArray = require('bytearray2');

describe('Protocol', function () {
	it('should parse HelloConnectMessage', function () {
		var buff = new ByteArray();
		var wrapper = new Protocol.CustomDataWrapper(buff);
		var message = new Protocol.IdentificationMessage();
		message.key = [1,24,35,98,47,54];
		message.salt = 'YEp';
		message.pack(wrapper);
		wrapper.position = 0;
		var message_p = Protocol.MessageReceiver.parse(wrapper);
		expect(message_p).not.toBe(message);
	});
	
	it('should parse IdentificationMessage', function () {
		var buff = new ByteArray();
		var wrapper = new Protocol.CustomDataWrapper(buff);
		var message = new Protocol.IdentificationMessage();
		var version = new Protocol.VersionExtended();
		version.major = 2;
		version.major = 31;
		version.major = 0;
		message.version = version;
		message.lang = 'fr';
		message.credentials = [24,3,15,48,75,2];
		message.serverId = 22;
		message.pack(wrapper);
		wrapper.position = 0;
		var message_p = Protocol.MessageReceiver.parse(wrapper);
		expect(message_p).not.toBe(message);
	});
});