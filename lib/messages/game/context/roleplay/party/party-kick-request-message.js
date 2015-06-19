var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyKickRequestMessage = function() {
  this.playerId = 0;
};

util.inherits(PartyKickRequestMessage, BaseMessage);

PartyKickRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyKickRequestMessage(output);
};

PartyKickRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyKickRequestMessage(input);
};

PartyKickRequestMessage.prototype.serializeAs_PartyKickRequestMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
};

PartyKickRequestMessage.prototype.deserializeAs_PartyKickRequestMessage = function(input) {
  this.deserialize(input);
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of PartyKickRequestMessage.playerId.")));
  };
};

PartyKickRequestMessage.prototype.getMessageId = function() {
  return 5592;
};

PartyKickRequestMessage.prototype.getClassName = function() {
  return 'PartyKickRequestMessage';
};

module.exports.id = 5592;
module.exports.class = PartyKickRequestMessage;