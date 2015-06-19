var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyAbdicateThroneMessage = function() {
  this.playerId = 0;
};

util.inherits(PartyAbdicateThroneMessage, BaseMessage);

PartyAbdicateThroneMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyAbdicateThroneMessage(output);
};

PartyAbdicateThroneMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyAbdicateThroneMessage(input);
};

PartyAbdicateThroneMessage.prototype.serializeAs_PartyAbdicateThroneMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
};

PartyAbdicateThroneMessage.prototype.deserializeAs_PartyAbdicateThroneMessage = function(input) {
  this.deserialize(input);
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of PartyAbdicateThroneMessage.playerId.")));
  };
};

PartyAbdicateThroneMessage.prototype.getMessageId = function() {
  return 6080;
};

PartyAbdicateThroneMessage.prototype.getClassName = function() {
  return 'PartyAbdicateThroneMessage';
};

module.exports.id = 6080;
module.exports.class = PartyAbdicateThroneMessage;