var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

AbstractGameActionFightTargetedAbilityMessage.prototype.serializeAs_AbstractGameActionFightTargetedAbilityMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.destinationCellId < -1 || this.destinationCellId > 559) {
    throw new Error("Forbidden value (" + this.destinationCellId + ") on element destinationCellId.");
  } else {
    param1.writeShort(this.destinationCellId);
    param1.writeByte(this.critical);
    param1.writeBoolean(this.silentCast);
    return;
  }
};

AbstractGameActionFightTargetedAbilityMessage.prototype.deserializeAs_AbstractGameActionFightTargetedAbilityMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.destinationCellId = param1.readShort();
  if (this.destinationCellId < -1 || this.destinationCellId > 559) {
    throw new Error("Forbidden value (" + this.destinationCellId + ") on element of AbstractGameActionFightTargetedAbilityMessage.destinationCellId.");
  } else {
    this.critical = param1.readByte();
    if (this.critical < 0) {
      throw new Error("Forbidden value (" + this.critical + ") on element of AbstractGameActionFightTargetedAbilityMessage.critical.");
    } else {
      this.silentCast = param1.readBoolean();
      return;
    }
  }
};

AbstractGameActionFightTargetedAbilityMessage.prototype.getMessageId = function() {
  return 6118;
};

AbstractGameActionFightTargetedAbilityMessage.prototype.getClassName = function() {
  return 'AbstractGameActionFightTargetedAbilityMessage';
};

module.exports.id = 6118;
module.exports.class = AbstractGameActionFightTargetedAbilityMessage;