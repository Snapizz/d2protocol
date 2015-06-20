var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameRolePlayShowActorWithEventMessage = function() {
  this.actorEventId = 0;
};

util.inherits(GameRolePlayShowActorWithEventMessage, BaseMessage);

GameRolePlayShowActorWithEventMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayShowActorWithEventMessage(output);
};

GameRolePlayShowActorWithEventMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayShowActorWithEventMessage(input);
};

GameRolePlayShowActorWithEventMessage.prototype.serializeAs_GameRolePlayShowActorWithEventMessage = function(param1) {
  this.serializeAs_GameRolePlayShowActorMessage(param1);
  if (this.actorEventId < 0) {
    throw new Error("Forbidden value (" + this.actorEventId + ") on element actorEventId.");
  } else {
    param1.writeByte(this.actorEventId);
    return;
  }
};

GameRolePlayShowActorWithEventMessage.prototype.deserializeAs_GameRolePlayShowActorWithEventMessage = function(param1) {
  this.deserialize(param1);
  this.actorEventId = param1.readByte();
  if (this.actorEventId < 0) {
    throw new Error("Forbidden value (" + this.actorEventId + ") on element of GameRolePlayShowActorWithEventMessage.actorEventId.");
  } else {
    return;
  }
};

GameRolePlayShowActorWithEventMessage.prototype.getMessageId = function() {
  return 6407;
};

GameRolePlayShowActorWithEventMessage.prototype.getClassName = function() {
  return 'GameRolePlayShowActorWithEventMessage';
};

module.exports.id = 6407;
module.exports.class = GameRolePlayShowActorWithEventMessage;
module.exports.getInstance = function() {
  return new GameRolePlayShowActorWithEventMessage();
};