var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
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

GameActionFightTeleportOnSameMapMessage.prototype.serializeAs_GameActionFightTeleportOnSameMapMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeShort(this.cellId);
};

GameActionFightTeleportOnSameMapMessage.prototype.deserializeAs_GameActionFightTeleportOnSameMapMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.cellId = input.readShort();
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of GameActionFightTeleportOnSameMapMessage.cellId.")));
  };
};

GameActionFightTeleportOnSameMapMessage.prototype.getMessageId = function() {
  return 5528;
};

GameActionFightTeleportOnSameMapMessage.prototype.getClassName = function() {
  return 'GameActionFightTeleportOnSameMapMessage';
};

module.exports.id = 5528;
module.exports.class = GameActionFightTeleportOnSameMapMessage;