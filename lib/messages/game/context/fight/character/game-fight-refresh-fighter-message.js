var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightRefreshFighterMessage = function() {
  this.informations;
};

util.inherits(GameFightRefreshFighterMessage, BaseMessage);

GameFightRefreshFighterMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightRefreshFighterMessage(output);
};

GameFightRefreshFighterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightRefreshFighterMessage(input);
};

GameFightRefreshFighterMessage.prototype.serializeAs_GameFightRefreshFighterMessage = function(output) {
  output.writeShort(this.informations.getTypeId());
  this.informations.serialize(output);
};

GameFightRefreshFighterMessage.prototype.deserializeAs_GameFightRefreshFighterMessage = function(input) {
  var _id1 = input.readUnsignedShort();
  this.informations = ProtocolTypeManager.getInstance(GameContextActorInformations, _id1);
  this.informations.deserialize(input);
};

GameFightRefreshFighterMessage.prototype.getMessageId = function() {
  return 6309;
};

GameFightRefreshFighterMessage.prototype.getClassName = function() {
  return 'GameFightRefreshFighterMessage';
};

module.exports.id = 6309;
module.exports.class = GameFightRefreshFighterMessage;