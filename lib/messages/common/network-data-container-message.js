var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var NetworkDataContainerMessage = function() {

};

util.inherits(NetworkDataContainerMessage, BaseMessage);

NetworkDataContainerMessage.prototype.serialize = function(output) {
  this.serializeAs_NetworkDataContainerMessage(output);
};

NetworkDataContainerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NetworkDataContainerMessage(input);
};

NetworkDataContainerMessage.prototype.serializeAs_NetworkDataContainerMessage = function(output) {
  output.writeBytes(this.content);
};

NetworkDataContainerMessage.prototype.deserializeAs_NetworkDataContainerMessage = function(input) {
  var _contentLen = input.readUnsignedShort();
  var tmpBuffer = new ByteArray();
  input.readBytes(tmpBuffer, 0, _contentLen);
  tmpBuffer.uncompress();
  this.content = tmpBuffer;
};

NetworkDataContainerMessage.prototype.getMessageId = function() {
  return 2;
};

NetworkDataContainerMessage.prototype.getClassName = function() {
  return 'NetworkDataContainerMessage';
};

module.exports.id = 2;
module.exports.class = NetworkDataContainerMessage;