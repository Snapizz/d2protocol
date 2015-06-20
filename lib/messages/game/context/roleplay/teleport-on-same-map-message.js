var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var TeleportOnSameMapMessage = function() {
  this.targetId = 0;
  this.cellId = 0;
};

util.inherits(TeleportOnSameMapMessage, BaseMessage);

TeleportOnSameMapMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportOnSameMapMessage(output);
};

TeleportOnSameMapMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportOnSameMapMessage(input);
};

TeleportOnSameMapMessage.prototype.serializeAs_TeleportOnSameMapMessage = function(param1) {
  param1.writeInt(this.targetId);
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeVarShort(this.cellId);
    return;
  }
};

TeleportOnSameMapMessage.prototype.deserializeAs_TeleportOnSameMapMessage = function(param1) {
  this.targetId = param1.readInt();
  this.cellId = param1.readVarUhShort();
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of TeleportOnSameMapMessage.cellId.");
  } else {
    return;
  }
};

TeleportOnSameMapMessage.prototype.getMessageId = function() {
  return 6048;
};

TeleportOnSameMapMessage.prototype.getClassName = function() {
  return 'TeleportOnSameMapMessage';
};

module.exports.id = 6048;
module.exports.class = TeleportOnSameMapMessage;
module.exports.getInstance = function() {
  return new TeleportOnSameMapMessage();
};