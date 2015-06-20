var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyNameUpdateMessage = function() {
  this.partyName = "";
};

util.inherits(PartyNameUpdateMessage, BaseMessage);

PartyNameUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyNameUpdateMessage(output);
};

PartyNameUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyNameUpdateMessage(input);
};

PartyNameUpdateMessage.prototype.serializeAs_PartyNameUpdateMessage = function(output) {
  super.serializeAs_AbstractPartyMessage(param1);
  param1.writeUTF(this.partyName);
};

PartyNameUpdateMessage.prototype.deserializeAs_PartyNameUpdateMessage = function(input) {
  super.deserialize(param1);
  this.partyName = param1.readUTF();
};

PartyNameUpdateMessage.prototype.getMessageId = function() {
  return 6502;
};

PartyNameUpdateMessage.prototype.getClassName = function() {
  return 'PartyNameUpdateMessage';
};

module.exports.id = 6502;
module.exports.class = PartyNameUpdateMessage;