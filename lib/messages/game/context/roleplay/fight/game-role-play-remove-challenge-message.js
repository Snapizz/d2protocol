var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayRemoveChallengeMessage = function() {
  this.fightId = 0;
};

util.inherits(GameRolePlayRemoveChallengeMessage, BaseMessage);

GameRolePlayRemoveChallengeMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayRemoveChallengeMessage(output);
};

GameRolePlayRemoveChallengeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayRemoveChallengeMessage(input);
};

GameRolePlayRemoveChallengeMessage.prototype.serializeAs_GameRolePlayRemoveChallengeMessage = function(output) {
  output.writeInt(this.fightId);
};

GameRolePlayRemoveChallengeMessage.prototype.deserializeAs_GameRolePlayRemoveChallengeMessage = function(input) {
  this.fightId = input.readInt();
};

GameRolePlayRemoveChallengeMessage.prototype.getMessageId = function() {
  return 300;
};

GameRolePlayRemoveChallengeMessage.prototype.getClassName = function() {
  return 'GameRolePlayRemoveChallengeMessage';
};

module.exports.id = 300;
module.exports.class = GameRolePlayRemoveChallengeMessage;