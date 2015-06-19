var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SetEnablePVPRequestMessage = function() {
  this.enable = false;
};

util.inherits(SetEnablePVPRequestMessage, BaseMessage);

SetEnablePVPRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_SetEnablePVPRequestMessage(output);
};

SetEnablePVPRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SetEnablePVPRequestMessage(input);
};

SetEnablePVPRequestMessage.prototype.serializeAs_SetEnablePVPRequestMessage = function(output) {
  output.writeBoolean(this.enable);
};

SetEnablePVPRequestMessage.prototype.deserializeAs_SetEnablePVPRequestMessage = function(input) {
  this.enable = input.readBoolean();
};

SetEnablePVPRequestMessage.prototype.getMessageId = function() {
  return 1810;
};

SetEnablePVPRequestMessage.prototype.getClassName = function() {
  return 'SetEnablePVPRequestMessage';
};

module.exports.id = 1810;
module.exports.class = SetEnablePVPRequestMessage;