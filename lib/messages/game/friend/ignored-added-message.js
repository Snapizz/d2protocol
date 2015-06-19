var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IgnoredAddedMessage = function() {
  this.ignoreAdded;
  this.session = false;
};

util.inherits(IgnoredAddedMessage, BaseMessage);

IgnoredAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_IgnoredAddedMessage(output);
};

IgnoredAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredAddedMessage(input);
};

IgnoredAddedMessage.prototype.serializeAs_IgnoredAddedMessage = function(output) {
  output.writeShort(this.ignoreAdded.getTypeId());
  this.ignoreAdded.serialize(output);
  output.writeBoolean(this.session);
};

IgnoredAddedMessage.prototype.deserializeAs_IgnoredAddedMessage = function(input) {
  var _id1 = input.readUnsignedShort();
  this.ignoreAdded = ProtocolTypeManager.getInstance(IgnoredInformations, _id1);
  this.ignoreAdded.deserialize(input);
  this.session = input.readBoolean();
};

IgnoredAddedMessage.prototype.getMessageId = function() {
  return 5678;
};

IgnoredAddedMessage.prototype.getClassName = function() {
  return 'IgnoredAddedMessage';
};

module.exports.id = 5678;
module.exports.class = IgnoredAddedMessage;