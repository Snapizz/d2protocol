var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismFightDefenderLeaveMessage = function() {
  this.subAreaId = 0;
  this.fightId = 0;
  this.fighterToRemoveId = 0;
};

util.inherits(PrismFightDefenderLeaveMessage, BaseMessage);

PrismFightDefenderLeaveMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightDefenderLeaveMessage(output);
};

PrismFightDefenderLeaveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightDefenderLeaveMessage(input);
};

PrismFightDefenderLeaveMessage.prototype.serializeAs_PrismFightDefenderLeaveMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element fightId.")));
  };
  output.writeVarShort(this.fightId);
  if (this.fighterToRemoveId < 0) {
    throw (new Error((("Forbidden value (" + this.fighterToRemoveId) + ") on element fighterToRemoveId.")));
  };
  output.writeVarInt(this.fighterToRemoveId);
};

PrismFightDefenderLeaveMessage.prototype.deserializeAs_PrismFightDefenderLeaveMessage = function(input) {
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismFightDefenderLeaveMessage.subAreaId.")));
  };
  this.fightId = input.readVarUhShort();
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element of PrismFightDefenderLeaveMessage.fightId.")));
  };
  this.fighterToRemoveId = input.readVarUhInt();
  if (this.fighterToRemoveId < 0) {
    throw (new Error((("Forbidden value (" + this.fighterToRemoveId) + ") on element of PrismFightDefenderLeaveMessage.fighterToRemoveId.")));
  };
};

PrismFightDefenderLeaveMessage.prototype.getMessageId = function() {
  return 5892;
};

PrismFightDefenderLeaveMessage.prototype.getClassName = function() {
  return 'PrismFightDefenderLeaveMessage';
};

module.exports.id = 5892;
module.exports.class = PrismFightDefenderLeaveMessage;