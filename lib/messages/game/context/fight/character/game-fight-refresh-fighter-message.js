var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameContextActorInformations = require('../../../../../types/game/context/game-context-actor-informations.js');

var GameFightRefreshFighterMessage = function() {
  this.informations = new GameContextActorInformations();
};

util.inherits(GameFightRefreshFighterMessage, BaseMessage);

GameFightRefreshFighterMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightRefreshFighterMessage(output);
};

GameFightRefreshFighterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightRefreshFighterMessage(input);
};

GameFightRefreshFighterMessage.prototype.serializeAs_GameFightRefreshFighterMessage = function(param1) {
  param1.writeShort(this.informations.getTypeId());
  this.informations.serialize(param1);
};

GameFightRefreshFighterMessage.prototype.deserializeAs_GameFightRefreshFighterMessage = function(param1) {
  var _loc2_ = param1.readUnsignedShort();
  this.informations = ProtocolTypeManager.getInstance(GameContextActorInformations, _loc2_);
  this.informations.deserialize(param1);
};

GameFightRefreshFighterMessage.prototype.getMessageId = function() {
  return 6309;
};

GameFightRefreshFighterMessage.prototype.getClassName = function() {
  return 'GameFightRefreshFighterMessage';
};

module.exports.id = 6309;
module.exports.class = GameFightRefreshFighterMessage;