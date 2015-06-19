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
  output.writeShort(this.informations.getTypeId());
  this.informations.serialize(output);
};

GameRolePlayShowActorMessage.prototype.deserializeAs_GameRolePlayShowActorMessage = function(input) {
  var _id1 = input.readUnsignedShort();
  this.informations = ProtocolTypeManager.getInstance(GameRolePlayActorInformations, _id1);
  this.informations.deserialize(input);
};

GameRolePlayShowActorMessage.prototype.getMessageId = function() {
  return 0;
};

GameRolePlayShowActorMessage.prototype.getClassName = function() {
  return 'GameRolePlayShowActorMessage';
};

module.exports.id = 0;
module.exports.class = GameRolePlayShowActorMessage;