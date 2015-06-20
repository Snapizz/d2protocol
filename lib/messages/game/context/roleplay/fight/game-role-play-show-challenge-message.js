var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var FightCommonInformations = require('../../../../../types/game/context/fight/fight-common-informations.js').class;

var GameRolePlayShowChallengeMessage = function() {
  this.commonsInfos = new FightCommonInformations();
};

util.inherits(GameRolePlayShowChallengeMessage, BaseMessage);

GameRolePlayShowChallengeMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayShowChallengeMessage(output);
};

GameRolePlayShowChallengeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayShowChallengeMessage(input);
};

GameRolePlayShowChallengeMessage.prototype.serializeAs_GameRolePlayShowChallengeMessage = function(param1) {
  this.commonsInfos.serializeAs_FightCommonInformations(param1);
};

GameRolePlayShowChallengeMessage.prototype.deserializeAs_GameRolePlayShowChallengeMessage = function(param1) {
  this.commonsInfos = new FightCommonInformations();
  this.commonsInfos.deserialize(param1);
};

GameRolePlayShowChallengeMessage.prototype.getMessageId = function() {
  return 301;
};

GameRolePlayShowChallengeMessage.prototype.getClassName = function() {
  return 'GameRolePlayShowChallengeMessage';
};

module.exports.id = 301;
module.exports.class = GameRolePlayShowChallengeMessage;
module.exports.getInstance = function() {
  return new GameRolePlayShowChallengeMessage();
};