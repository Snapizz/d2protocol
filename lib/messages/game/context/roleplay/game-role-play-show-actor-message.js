var d2com = require('d2com'),
  BaseMessage = require('./game-role-play-show-actor-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations.js').class;

var GameRolePlayShowActorMessage = function() {
  this.informations = new GameRolePlayActorInformations();
};

util.inherits(GameRolePlayShowActorMessage, BaseMessage);

GameRolePlayShowActorMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayShowActorMessage(output);
};

GameRolePlayShowActorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayShowActorMessage(input);
};

GameRolePlayShowActorMessage.prototype.serializeAs_GameRolePlayShowActorMessage = function(param1) {
  param1.writeShort(this.informations.getTypeId());
  this.informations.serialize(param1);
};

GameRolePlayShowActorMessage.prototype.deserializeAs_GameRolePlayShowActorMessage = function(param1) {
  var _loc2_ = param1.readUnsignedShort();
  this.informations = ProtocolTypeManager.getInstance(GameRolePlayActorInformations, _loc2_);
  this.informations.deserialize(param1);
};

GameRolePlayShowActorMessage.prototype.getMessageId = function() {
  return 5632;
};

GameRolePlayShowActorMessage.prototype.getClassName = function() {
  return 'GameRolePlayShowActorMessage';
};

module.exports.id = 5632;
module.exports.class = GameRolePlayShowActorMessage;
module.exports.getInstance = function() {
  return new GameRolePlayShowActorMessage();
};