var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var PartyModifiableStatusMessage = function() {
  this.enabled = false;
};

util.inherits(PartyModifiableStatusMessage, BaseMessage);

PartyModifiableStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyModifiableStatusMessage(output);
};

PartyModifiableStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyModifiableStatusMessage(input);
};

PartyModifiableStatusMessage.prototype.serializeAs_PartyModifiableStatusMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
  param1.writeBoolean(this.enabled);
};

PartyModifiableStatusMessage.prototype.deserializeAs_PartyModifiableStatusMessage = function(param1) {
  this.deserialize(param1);
  this.enabled = param1.readBoolean();
};

PartyModifiableStatusMessage.prototype.getMessageId = function() {
  return 6277;
};

PartyModifiableStatusMessage.prototype.getClassName = function() {
  return 'PartyModifiableStatusMessage';
};

module.exports.id = 6277;
module.exports.class = PartyModifiableStatusMessage;
module.exports.getInstance = function() {
  return new PartyModifiableStatusMessage();
};