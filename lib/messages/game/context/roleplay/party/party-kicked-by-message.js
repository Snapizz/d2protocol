var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyKickedByMessage = function() {
  this.kickerId = 0;
};

util.inherits(PartyKickedByMessage, BaseMessage);

PartyKickedByMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyKickedByMessage(output);
};

PartyKickedByMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyKickedByMessage(input);
};

PartyKickedByMessage.prototype.serializeAs_PartyKickedByMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  if (this.kickerId < 0) {
    throw (new Error((("Forbidden value (" + this.kickerId) + ") on element kickerId.")));
  };
  output.writeVarInt(this.kickerId);
};

PartyKickedByMessage.prototype.deserializeAs_PartyKickedByMessage = function(input) {
  this.deserialize(input);
  this.kickerId = input.readVarUhInt();
  if (this.kickerId < 0) {
    throw (new Error((("Forbidden value (" + this.kickerId) + ") on element of PartyKickedByMessage.kickerId.")));
  };
};

PartyKickedByMessage.prototype.getMessageId = function() {
  return 5590;
};

PartyKickedByMessage.prototype.getClassName = function() {
  return 'PartyKickedByMessage';
};

module.exports.id = 5590;
module.exports.class = PartyKickedByMessage;