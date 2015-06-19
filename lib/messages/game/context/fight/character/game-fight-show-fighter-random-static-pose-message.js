var d2com = require('d2com'),
  BaseMessage = require('./game-fight-show-fighter-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightShowFighterRandomStaticPoseMessage = function() {

};

util.inherits(GameFightShowFighterRandomStaticPoseMessage, BaseMessage);

GameFightShowFighterRandomStaticPoseMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightShowFighterRandomStaticPoseMessage(output);
};

GameFightShowFighterRandomStaticPoseMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightShowFighterRandomStaticPoseMessage(input);
};

GameFightShowFighterRandomStaticPoseMessage.prototype.serializeAs_GameFightShowFighterRandomStaticPoseMessage = function(output) {
  this.serializeAs_GameFightShowFighterMessage(output);
};

GameFightShowFighterRandomStaticPoseMessage.prototype.deserializeAs_GameFightShowFighterRandomStaticPoseMessage = function(input) {
  this.deserialize(input);
};

GameFightShowFighterRandomStaticPoseMessage.prototype.getMessageId = function() {
  return 6218;
};

GameFightShowFighterRandomStaticPoseMessage.prototype.getClassName = function() {
  return 'GameFightShowFighterRandomStaticPoseMessage';
};

module.exports.id = 6218;
module.exports.class = GameFightShowFighterRandomStaticPoseMessage;