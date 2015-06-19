var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

IgnoredAddRequestMessage.prototype.serializeAs_IgnoredAddRequestMessage = function(output) {
  output.writeUTF(this.name);
  output.writeBoolean(this.session);
};

IgnoredAddRequestMessage.prototype.deserializeAs_IgnoredAddRequestMessage = function(input) {
  this.name = input.readUTF();
  this.session = input.readBoolean();
};

IgnoredAddRequestMessage.prototype.getMessageId = function() {
  return 5673;
};

IgnoredAddRequestMessage.prototype.getClassName = function() {
  return 'IgnoredAddRequestMessage';
};

module.exports.id = 5673;
module.exports.class = IgnoredAddRequestMessage;