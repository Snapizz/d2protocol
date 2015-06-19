var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HelloConnectMessage = function() {
  this.salt = "";
  this.key = [];
};

util.inherits(HelloConnectMessage, BaseMessage);

HelloConnectMessage.prototype.serialize = function(output) {
  this.serializeAs_HelloConnectMessage(output);
};

HelloConnectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HelloConnectMessage(input);
};

HelloConnectMessage.prototype.serializeAs_HelloConnectMessage = function(output) {
  output.writeUTF(this.salt);
  output.writeShort(this.key.length);
  var _i2;
  while (_i2 < this.key.length) {
    output.writeByte(this.key[_i2]);
    _i2++;
  };
};

HelloConnectMessage.prototype.deserializeAs_HelloConnectMessage = function(input) {
  var _val2;
  this.salt = input.readUTF();
  var _keyLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _keyLen) {
    _val2 = input.readByte();
    this.key.push(_val2);
    _i2++;
  };
};

HelloConnectMessage.prototype.getMessageId = function() {
  return 3;
};

HelloConnectMessage.prototype.getClassName = function() {
  return 'HelloConnectMessage';
};

module.exports.id = 3;
module.exports.class = HelloConnectMessage;