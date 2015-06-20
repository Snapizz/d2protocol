var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var IgnoredAddRequestMessage = function() {
  this.name = "";
  this.session = false;
};

util.inherits(IgnoredAddRequestMessage, BaseMessage);

IgnoredAddRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_IgnoredAddRequestMessage(output);
};

IgnoredAddRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredAddRequestMessage(input);
};

IgnoredAddRequestMessage.prototype.serializeAs_IgnoredAddRequestMessage = function(param1) {
  param1.writeUTF(this.name);
  param1.writeBoolean(this.session);
};

IgnoredAddRequestMessage.prototype.deserializeAs_IgnoredAddRequestMessage = function(param1) {
  this.name = param1.readUTF();
  this.session = param1.readBoolean();
};

IgnoredAddRequestMessage.prototype.getMessageId = function() {
  return 5673;
};

IgnoredAddRequestMessage.prototype.getClassName = function() {
  return 'IgnoredAddRequestMessage';
};

module.exports.id = 5673;
module.exports.class = IgnoredAddRequestMessage;
module.exports.getInstance = function() {
  return new IgnoredAddRequestMessage();
};