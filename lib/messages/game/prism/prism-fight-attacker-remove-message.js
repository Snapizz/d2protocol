var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismFightAttackerRemoveMessage = function() {
  this.subAreaId = 0;
  this.fightId = 0;
  this.fighterToRemoveId = 0;
};

util.inherits(PrismFightAttackerRemoveMessage, BaseMessage);

PrismFightAttackerRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightAttackerRemoveMessage(output);
};

PrismFightAttackerRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightAttackerRemoveMessage(input);
};

PrismFightAttackerRemoveMessage.prototype.serializeAs_PrismFightAttackerRemoveMessage = function(output) {
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
  } else {
    param1.writeVarShort(this.subAreaId);
    if (this.fightId < 0) {
      throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
    } else {
      param1.writeVarShort(this.fightId);
      if (this.fighterToRemoveId < 0) {
        throw new Error("Forbidden value (" + this.fighterToRemoveId + ") on element fighterToRemoveId.");
      } else {
        param1.writeVarInt(this.fighterToRemoveId);
        return;
      }
    }
  }
};

PrismFightAttackerRemoveMessage.prototype.deserializeAs_PrismFightAttackerRemoveMessage = function(input) {
  this.subAreaId = param1.readVarUhShort();
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismFightAttackerRemoveMessage.subAreaId.");
  } else {
    this.fightId = param1.readVarUhShort();
    if (this.fightId < 0) {
      throw new Error("Forbidden value (" + this.fightId + ") on element of PrismFightAttackerRemoveMessage.fightId.");
    } else {
      this.fighterToRemoveId = param1.readVarUhInt();
      if (this.fighterToRemoveId < 0) {
        throw new Error("Forbidden value (" + this.fighterToRemoveId + ") on element of PrismFightAttackerRemoveMessage.fighterToRemoveId.");
      } else {
        return;
      }
    }
  }
};

PrismFightAttackerRemoveMessage.prototype.getMessageId = function() {
  return 5897;
};

PrismFightAttackerRemoveMessage.prototype.getClassName = function() {
  return 'PrismFightAttackerRemoveMessage';
};

module.exports.id = 5897;
module.exports.class = PrismFightAttackerRemoveMessage;