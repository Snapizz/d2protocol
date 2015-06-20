var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameActionNoopMessage = function() {

};

util.inherits(GameActionNoopMessage, BaseMessage);

GameActionNoopMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionNoopMessage(output);
};

GameActionNoopMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionNoopMessage(input);
};

GameActionNoopMessage.prototype.serializeAs_GameActionNoopMessage = function(param1) {

};

GameActionNoopMessage.prototype.deserializeAs_GameActionNoopMessage = function(param1) {

};

GameActionNoopMessage.prototype.getMessageId = function() {
  return 1002;
};

GameActionNoopMessage.prototype.getClassName = function() {
  return 'GameActionNoopMessage';
};

module.exports.id = 1002;
module.exports.class = GameActionNoopMessage;