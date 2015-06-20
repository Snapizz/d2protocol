var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

GameFightShowFighterRandomStaticPoseMessage.prototype.serializeAs_GameFightShowFighterRandomStaticPoseMessage = function(param1) {
  this.serializeAs_GameFightShowFighterMessage(param1);
};

GameFightShowFighterRandomStaticPoseMessage.prototype.deserializeAs_GameFightShowFighterRandomStaticPoseMessage = function(param1) {
  this.deserialize(param1);
};

GameFightShowFighterRandomStaticPoseMessage.prototype.getMessageId = function() {
  return 6218;
};

GameFightShowFighterRandomStaticPoseMessage.prototype.getClassName = function() {
  return 'GameFightShowFighterRandomStaticPoseMessage';
};

module.exports.id = 6218;
module.exports.class = GameFightShowFighterRandomStaticPoseMessage;
module.exports.getInstance = function() {
  return new GameFightShowFighterRandomStaticPoseMessage();
};