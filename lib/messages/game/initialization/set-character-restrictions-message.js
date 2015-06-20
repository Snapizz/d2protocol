var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SetCharacterRestrictionsMessage = function() {
  this.restrictions;
};

util.inherits(SetCharacterRestrictionsMessage, BaseMessage);

SetCharacterRestrictionsMessage.prototype.serialize = function(output) {
  this.serializeAs_SetCharacterRestrictionsMessage(output);
};

SetCharacterRestrictionsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SetCharacterRestrictionsMessage(input);
};

SetCharacterRestrictionsMessage.prototype.serializeAs_SetCharacterRestrictionsMessage = function(output) {
  this.restrictions.serializeAs_ActorRestrictionsInformations(param1);
};

SetCharacterRestrictionsMessage.prototype.deserializeAs_SetCharacterRestrictionsMessage = function(input) {
  this.restrictions = new ActorRestrictionsInformations();
  this.restrictions.deserialize(param1);
};

SetCharacterRestrictionsMessage.prototype.getMessageId = function() {
  return 170;
};

SetCharacterRestrictionsMessage.prototype.getClassName = function() {
  return 'SetCharacterRestrictionsMessage';
};

module.exports.id = 170;
module.exports.class = SetCharacterRestrictionsMessage;