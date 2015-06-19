var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismFightDefenderAddMessage = function() {
  this.subAreaId = 0;
  this.fightId = 0;
  this.defender;
};

util.inherits(PrismFightDefenderAddMessage, BaseMessage);

PrismFightDefenderAddMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightDefenderAddMessage(output);
};

PrismFightDefenderAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightDefenderAddMessage(input);
};

PrismFightDefenderAddMessage.prototype.serializeAs_PrismFightDefenderAddMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element fightId.")));
  };
  output.writeVarShort(this.fightId);
  output.writeShort(this.defender.getTypeId());
  this.defender.serialize(output);
};

PrismFightDefenderAddMessage.prototype.deserializeAs_PrismFightDefenderAddMessage = function(input) {
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismFightDefenderAddMessage.subAreaId.")));
  };
  this.fightId = input.readVarUhShort();
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element of PrismFightDefenderAddMessage.fightId.")));
  };
  var _id3 = input.readUnsignedShort();
  this.defender = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _id3);
  this.defender.deserialize(input);
};

PrismFightDefenderAddMessage.prototype.getMessageId = function() {
  return 5895;
};

PrismFightDefenderAddMessage.prototype.getClassName = function() {
  return 'PrismFightDefenderAddMessage';
};

module.exports.id = 5895;
module.exports.class = PrismFightDefenderAddMessage;