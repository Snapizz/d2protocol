var d2com = require('d2com'),
  BaseMessage = require('./game-role-play-show-actor-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameRolePlayShowActorWithEventMessage.prototype.serializeAs_GameRolePlayShowActorWithEventMessage = function(output) {
  this.serializeAs_GameRolePlayShowActorMessage(output);
  if (this.actorEventId < 0) {
    throw (new Error((("Forbidden value (" + this.actorEventId) + ") on element actorEventId.")));
  };
  output.writeByte(this.actorEventId);
};

GameRolePlayShowActorWithEventMessage.prototype.deserializeAs_GameRolePlayShowActorWithEventMessage = function(input) {
  this.deserialize(input);
  this.actorEventId = input.readByte();
  if (this.actorEventId < 0) {
    throw (new Error((("Forbidden value (" + this.actorEventId) + ") on element of GameRolePlayShowActorWithEventMessage.actorEventId.")));
  };
};

GameRolePlayShowActorWithEventMessage.prototype.getMessageId = function() {
  return 6407;
};

GameRolePlayShowActorWithEventMessage.prototype.getClassName = function() {
  return 'GameRolePlayShowActorWithEventMessage';
};

module.exports.id = 6407;
module.exports.class = GameRolePlayShowActorWithEventMessage;