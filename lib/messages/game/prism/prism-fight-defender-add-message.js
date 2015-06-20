var d2com = require('d2com'),
  BaseMessage = require('./prism-fight-defender-add-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var CharacterMinimalPlusLookInformations = require('../../../types/game/character/character-minimal-plus-look-informations.js').class;

var PrismFightDefenderAddMessage = function() {
  this.subAreaId = 0;
  this.fightId = 0;
  this.defender = new CharacterMinimalPlusLookInformations();
};

util.inherits(PrismFightDefenderAddMessage, BaseMessage);

PrismFightDefenderAddMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightDefenderAddMessage(output);
};

PrismFightDefenderAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightDefenderAddMessage(input);
};

PrismFightDefenderAddMessage.prototype.serializeAs_PrismFightDefenderAddMessage = function(param1) {
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
  } else {
    param1.writeVarShort(this.subAreaId);
    if (this.fightId < 0) {
      throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
    } else {
      param1.writeVarShort(this.fightId);
      param1.writeShort(this.defender.getTypeId());
      this.defender.serialize(param1);
      return;
    }
  }
};

PrismFightDefenderAddMessage.prototype.deserializeAs_PrismFightDefenderAddMessage = function(param1) {
  this.subAreaId = param1.readVarUhShort();
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismFightDefenderAddMessage.subAreaId.");
  } else {
    this.fightId = param1.readVarUhShort();
    if (this.fightId < 0) {
      throw new Error("Forbidden value (" + this.fightId + ") on element of PrismFightDefenderAddMessage.fightId.");
    } else {
      var _loc2_ = param1.readUnsignedShort();
      this.defender = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc2_);
      this.defender.deserialize(param1);
      return;
    }
  }
};

PrismFightDefenderAddMessage.prototype.getMessageId = function() {
  return 5895;
};

PrismFightDefenderAddMessage.prototype.getClassName = function() {
  return 'PrismFightDefenderAddMessage';
};

module.exports.id = 5895;
module.exports.class = PrismFightDefenderAddMessage;
module.exports.getInstance = function() {
  return new PrismFightDefenderAddMessage();
};