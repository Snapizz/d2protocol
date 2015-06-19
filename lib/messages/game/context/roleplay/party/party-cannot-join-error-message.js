var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PartyCannotJoinErrorMessage.prototype.serializeAs_PartyCannotJoinErrorMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  output.writeByte(this.reason);
};

PartyCannotJoinErrorMessage.prototype.deserializeAs_PartyCannotJoinErrorMessage = function(input) {
  this.deserialize(input);
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of PartyCannotJoinErrorMessage.reason.")));
  };
};

PartyCannotJoinErrorMessage.prototype.getMessageId = function() {
  return 5583;
};

PartyCannotJoinErrorMessage.prototype.getClassName = function() {
  return 'PartyCannotJoinErrorMessage';
};

module.exports.id = 5583;
module.exports.class = PartyCannotJoinErrorMessage;