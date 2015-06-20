var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismFightAttackerAddMessage = function() {
  this.subAreaId = 0;
  this.fightId = 0;
  this.attacker;
};

util.inherits(PrismFightAttackerAddMessage, BaseMessage);

PrismFightAttackerAddMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightAttackerAddMessage(output);
};

PrismFightAttackerAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightAttackerAddMessage(input);
};

PrismFightAttackerAddMessage.prototype.serializeAs_PrismFightAttackerAddMessage = function(param1) {
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
  } else {
    param1.writeVarShort(this.subAreaId);
    if (this.fightId < 0) {
      throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
    } else {
      param1.writeVarShort(this.fightId);
      param1.writeShort(this.attacker.getTypeId());
      this.attacker.serialize(param1);
      return;
    }
  }
};

PrismFightAttackerAddMessage.prototype.deserializeAs_PrismFightAttackerAddMessage = function(param1) {
  this.subAreaId = param1.readVarUhShort();
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismFightAttackerAddMessage.subAreaId.");
  } else {
    this.fightId = param1.readVarUhShort();
    if (this.fightId < 0) {
      throw new Error("Forbidden value (" + this.fightId + ") on element of PrismFightAttackerAddMessage.fightId.");
    } else {
      var _loc2_ = param1.readUnsignedShort();
      this.attacker = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc2_);
      this.attacker.deserialize(param1);
      return;
    }
  }
};

PrismFightAttackerAddMessage.prototype.getMessageId = function() {
  return 5893;
};

PrismFightAttackerAddMessage.prototype.getClassName = function() {
  return 'PrismFightAttackerAddMessage';
};

module.exports.id = 5893;
module.exports.class = PrismFightAttackerAddMessage;