var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var NpcGenericActionFailureMessage = function() {

};

util.inherits(NpcGenericActionFailureMessage, BaseMessage);

NpcGenericActionFailureMessage.prototype.serialize = function(output) {
  this.serializeAs_NpcGenericActionFailureMessage(output);
};

NpcGenericActionFailureMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NpcGenericActionFailureMessage(input);
};

NpcGenericActionFailureMessage.prototype.serializeAs_NpcGenericActionFailureMessage = function(param1) {

};

NpcGenericActionFailureMessage.prototype.deserializeAs_NpcGenericActionFailureMessage = function(param1) {

};

NpcGenericActionFailureMessage.prototype.getMessageId = function() {
  return 5900;
};

NpcGenericActionFailureMessage.prototype.getClassName = function() {
  return 'NpcGenericActionFailureMessage';
};

module.exports.id = 5900;
module.exports.class = NpcGenericActionFailureMessage;
module.exports.getInstance = function() {
  return new NpcGenericActionFailureMessage();
};