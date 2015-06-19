var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayFightRequestCanceledMessage = function() {
  this.fightId = 0;
  this.sourceId = 0;
  this.targetId = 0;
};

util.inherits(GameRolePlayFightRequestCanceledMessage, BaseMessage);

GameRolePlayFightRequestCanceledMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayFightRequestCanceledMessage(output);
};

GameRolePlayFightRequestCanceledMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayFightRequestCanceledMessage(input);
};

GameRolePlayFightRequestCanceledMessage.prototype.serializeAs_GameRolePlayFightRequestCanceledMessage = function(output) {
  output.writeInt(this.fightId);
  if (this.sourceId < 0) {
    throw (new Error((("Forbidden value (" + this.sourceId) + ") on element sourceId.")));
  };
  output.writeVarInt(this.sourceId);
  output.writeInt(this.targetId);
};

GameRolePlayFightRequestCanceledMessage.prototype.deserializeAs_GameRolePlayFightRequestCanceledMessage = function(input) {
  this.fightId = input.readInt();
  this.sourceId = input.readVarUhInt();
  if (this.sourceId < 0) {
    throw (new Error((("Forbidden value (" + this.sourceId) + ") on element of GameRolePlayFightRequestCanceledMessage.sourceId.")));
  };
  this.targetId = input.readInt();
};

GameRolePlayFightRequestCanceledMessage.prototype.getMessageId = function() {
  return 5822;
};

GameRolePlayFightRequestCanceledMessage.prototype.getClassName = function() {
  return 'GameRolePlayFightRequestCanceledMessage';
};

module.exports.id = 5822;
module.exports.class = GameRolePlayFightRequestCanceledMessage;