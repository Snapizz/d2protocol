var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AbstractGameActionFightTargetedAbilityMessage = function() {
  this.targetId = 0;
  this.destinationCellId = 0;
  this.critical = 1;
  this.silentCast = false;
};

util.inherits(AbstractGameActionFightTargetedAbilityMessage, BaseMessage);

AbstractGameActionFightTargetedAbilityMessage.prototype.serialize = function(output) {
  this.serializeAs_AbstractGameActionFightTargetedAbilityMessage(output);
};

AbstractGameActionFightTargetedAbilityMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AbstractGameActionFightTargetedAbilityMessage(input);
};

AbstractGameActionFightTargetedAbilityMessage.prototype.serializeAs_AbstractGameActionFightTargetedAbilityMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if ((((this.destinationCellId < -1)) || ((this.destinationCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.destinationCellId) + ") on element destinationCellId.")));
  };
  output.writeShort(this.destinationCellId);
  output.writeByte(this.critical);
  output.writeBoolean(this.silentCast);
};

AbstractGameActionFightTargetedAbilityMessage.prototype.deserializeAs_AbstractGameActionFightTargetedAbilityMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.destinationCellId = input.readShort();
  if ((((this.destinationCellId < -1)) || ((this.destinationCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.destinationCellId) + ") on element of AbstractGameActionFightTargetedAbilityMessage.destinationCellId.")));
  };
  this.critical = input.readByte();
  if (this.critical < 0) {
    throw (new Error((("Forbidden value (" + this.critical) + ") on element of AbstractGameActionFightTargetedAbilityMessage.critical.")));
  };
  this.silentCast = input.readBoolean();
};

AbstractGameActionFightTargetedAbilityMessage.prototype.getMessageId = function() {
  return 6118;
};

AbstractGameActionFightTargetedAbilityMessage.prototype.getClassName = function() {
  return 'AbstractGameActionFightTargetedAbilityMessage';
};

module.exports.id = 6118;
module.exports.class = AbstractGameActionFightTargetedAbilityMessage;