var d2com = require('d2com'),
  BaseMessage = require('./party-cannot-join-error-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PartyCannotJoinErrorMessage = function() {
  this.reason = 0;
};

util.inherits(PartyCannotJoinErrorMessage, BaseMessage);

PartyCannotJoinErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyCannotJoinErrorMessage(output);
};

PartyCannotJoinErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyCannotJoinErrorMessage(input);
};

PartyCannotJoinErrorMessage.prototype.serializeAs_PartyCannotJoinErrorMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
  param1.writeByte(this.reason);
};

PartyCannotJoinErrorMessage.prototype.deserializeAs_PartyCannotJoinErrorMessage = function(param1) {
  this.deserialize(param1);
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of PartyCannotJoinErrorMessage.reason.");
  } else {
    return;
  }
};

PartyCannotJoinErrorMessage.prototype.getMessageId = function() {
  return 5583;
};

PartyCannotJoinErrorMessage.prototype.getClassName = function() {
  return 'PartyCannotJoinErrorMessage';
};

module.exports.id = 5583;
module.exports.class = PartyCannotJoinErrorMessage;
module.exports.getInstance = function() {
  return new PartyCannotJoinErrorMessage();
};