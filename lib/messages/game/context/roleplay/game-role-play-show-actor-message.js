var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayShowActorMessage = function() {
  this.informations;
};

util.inherits(GameRolePlayShowActorMessage, BaseMessage);

GameRolePlayShowActorMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayShowActorMessage(output);
};

GameRolePlayShowActorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayShowActorMessage(input);
};

GameRolePlayShowActorMessage.prototype.serializeAs_GameRolePlayShowActorMessage = function(output) {
  param1.writeShort(this.informations.getTypeId());
  this.informations.serialize(param1);
};

GameRolePlayShowActorMessage.prototype.deserializeAs_GameRolePlayShowActorMessage = function(input) {
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