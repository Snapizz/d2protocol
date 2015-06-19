var d2com = require('d2com'),
  BaseMessage = require('./game-role-play-delayed-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayDelayedObjectUseMessage = function() {
  this.objectGID = 0;
};

util.inherits(GameRolePlayDelayedObjectUseMessage, BaseMessage);

GameRolePlayDelayedObjectUseMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayDelayedObjectUseMessage(output);
};

GameRolePlayDelayedObjectUseMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayDelayedObjectUseMessage(input);
};

GameRolePlayDelayedObjectUseMessage.prototype.serializeAs_GameRolePlayDelayedObjectUseMessage = function(output) {
  this.serializeAs_GameRolePlayDelayedActionMessage(output);
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element objectGID.")));
  };
  output.writeVarShort(this.objectGID);
};

GameRolePlayDelayedObjectUseMessage.prototype.deserializeAs_GameRolePlayDelayedObjectUseMessage = function(input) {
  this.deserialize(input);
  this.objectGID = input.readVarUhShort();
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element of GameRolePlayDelayedObjectUseMessage.objectGID.")));
  };
};

GameRolePlayDelayedObjectUseMessage.prototype.getMessageId = function() {
  return 0;
};

GameRolePlayDelayedObjectUseMessage.prototype.getClassName = function() {
  return 'GameRolePlayDelayedObjectUseMessage';
};

module.exports.id = 0;
module.exports.class = GameRolePlayDelayedObjectUseMessage;