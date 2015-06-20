var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayShowChallengeMessage = function() {
  this.commonsInfos;
};

util.inherits(GameRolePlayShowChallengeMessage, BaseMessage);

GameRolePlayShowChallengeMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayShowChallengeMessage(output);
};

GameRolePlayShowChallengeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayShowChallengeMessage(input);
};

GameRolePlayShowChallengeMessage.prototype.serializeAs_GameRolePlayShowChallengeMessage = function(output) {
  this.commonsInfos.serializeAs_FightCommonInformations(param1);
};

GameRolePlayShowChallengeMessage.prototype.deserializeAs_GameRolePlayShowChallengeMessage = function(input) {
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