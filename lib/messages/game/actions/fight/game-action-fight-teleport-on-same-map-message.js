var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightTeleportOnSameMapMessage = function() {
  this.targetId = 0;
  this.cellId = 0;
};

util.inherits(GameActionFightTeleportOnSameMapMessage, BaseMessage);

GameActionFightTeleportOnSameMapMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightTeleportOnSameMapMessage(output);
};

GameActionFightTeleportOnSameMapMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightTeleportOnSameMapMessage(input);
};

GameActionFightTeleportOnSameMapMessage.prototype.serializeAs_GameActionFightTeleportOnSameMapMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.cellId < -1 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeShort(this.cellId);
    return;
  }
};

GameActionFightTeleportOnSameMapMessage.prototype.deserializeAs_GameActionFightTeleportOnSameMapMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.cellId = param1.readShort();
  if (this.cellId < -1 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionFightTeleportOnSameMapMessage.cellId.");
  } else {
    return;
  }
};

GameActionFightTeleportOnSameMapMessage.prototype.getMessageId = function() {
  return 5528;
};

GameActionFightTeleportOnSameMapMessage.prototype.getClassName = function() {
  return 'GameActionFightTeleportOnSameMapMessage';
};

module.exports.id = 5528;
module.exports.class = GameActionFightTeleportOnSameMapMessage;