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

PrismFightAttackerAddMessage.prototype.serializeAs_PrismFightAttackerAddMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element fightId.")));
  };
  output.writeVarShort(this.fightId);
  output.writeShort(this.attacker.getTypeId());
  this.attacker.serialize(output);
};

PrismFightAttackerAddMessage.prototype.deserializeAs_PrismFightAttackerAddMessage = function(input) {
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismFightAttackerAddMessage.subAreaId.")));
  };
  this.fightId = input.readVarUhShort();
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element of PrismFightAttackerAddMessage.fightId.")));
  };
  var _id3 = input.readUnsignedShort();
  this.attacker = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _id3);
  this.attacker.deserialize(input);
};

PrismFightAttackerAddMessage.prototype.getMessageId = function() {
  return 5893;
};

PrismFightAttackerAddMessage.prototype.getClassName = function() {
  return 'PrismFightAttackerAddMessage';
};

module.exports.id = 5893;
module.exports.class = PrismFightAttackerAddMessage;