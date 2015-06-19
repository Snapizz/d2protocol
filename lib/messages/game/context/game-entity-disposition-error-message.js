var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameEntityDispositionErrorMessage = function() {

};

util.inherits(GameEntityDispositionErrorMessage, BaseMessage);

GameEntityDispositionErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_GameEntityDispositionErrorMessage(output);
};

GameEntityDispositionErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameEntityDispositionErrorMessage(input);
};

GameEntityDispositionErrorMessage.prototype.serializeAs_GameEntityDispositionErrorMessage = function(output) {

};

GameEntityDispositionErrorMessage.prototype.deserializeAs_GameEntityDispositionErrorMessage = function(input) {

};

GameEntityDispositionErrorMessage.prototype.getMessageId = function() {
  return 5695;
};

GameEntityDispositionErrorMessage.prototype.getClassName = function() {
  return 'GameEntityDispositionErrorMessage';
};

module.exports.id = 5695;
module.exports.class = GameEntityDispositionErrorMessage;