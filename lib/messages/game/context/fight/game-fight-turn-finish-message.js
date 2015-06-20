var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameFightTurnFinishMessage = function() {

};

util.inherits(GameFightTurnFinishMessage, BaseMessage);

GameFightTurnFinishMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightTurnFinishMessage(output);
};

GameFightTurnFinishMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightTurnFinishMessage(input);
};

GameFightTurnFinishMessage.prototype.serializeAs_GameFightTurnFinishMessage = function(param1) {

};

GameFightTurnFinishMessage.prototype.deserializeAs_GameFightTurnFinishMessage = function(param1) {

};

GameFightTurnFinishMessage.prototype.getMessageId = function() {
  return 718;
};

GameFightTurnFinishMessage.prototype.getClassName = function() {
  return 'GameFightTurnFinishMessage';
};

module.exports.id = 718;
module.exports.class = GameFightTurnFinishMessage;