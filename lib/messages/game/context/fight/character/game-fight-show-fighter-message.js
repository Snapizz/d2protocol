var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightShowFighterMessage = function() {
  this.informations;
};

util.inherits(GameFightShowFighterMessage, BaseMessage);

GameFightShowFighterMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightShowFighterMessage(output);
};

GameFightShowFighterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightShowFighterMessage(input);
};

GameFightShowFighterMessage.prototype.serializeAs_GameFightShowFighterMessage = function(output) {
  output.writeShort(this.informations.getTypeId());
  this.informations.serialize(output);
};

GameFightShowFighterMessage.prototype.deserializeAs_GameFightShowFighterMessage = function(input) {
  var _id1 = input.readUnsignedShort();
  this.informations = ProtocolTypeManager.getInstance(GameFightFighterInformations, _id1);
  this.informations.deserialize(input);
};

GameFightShowFighterMessage.prototype.getMessageId = function() {
  return 5864;
};

GameFightShowFighterMessage.prototype.getClassName = function() {
  return 'GameFightShowFighterMessage';
};

module.exports.id = 5864;
module.exports.class = GameFightShowFighterMessage;