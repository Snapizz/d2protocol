var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PlayerStatusUpdateErrorMessage = function() {

};

util.inherits(PlayerStatusUpdateErrorMessage, BaseMessage);

PlayerStatusUpdateErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_PlayerStatusUpdateErrorMessage(output);
};

PlayerStatusUpdateErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PlayerStatusUpdateErrorMessage(input);
};

PlayerStatusUpdateErrorMessage.prototype.serializeAs_PlayerStatusUpdateErrorMessage = function(output) {

};

PlayerStatusUpdateErrorMessage.prototype.deserializeAs_PlayerStatusUpdateErrorMessage = function(input) {

};

PlayerStatusUpdateErrorMessage.prototype.getMessageId = function() {
  return 6385;
};

PlayerStatusUpdateErrorMessage.prototype.getClassName = function() {
  return 'PlayerStatusUpdateErrorMessage';
};

module.exports.id = 6385;
module.exports.class = PlayerStatusUpdateErrorMessage;