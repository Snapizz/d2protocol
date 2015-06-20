var d2com = require('d2com'),
  BaseMessage = require('./player-status-update-error-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

PlayerStatusUpdateErrorMessage.prototype.serializeAs_PlayerStatusUpdateErrorMessage = function(param1) {

};

PlayerStatusUpdateErrorMessage.prototype.deserializeAs_PlayerStatusUpdateErrorMessage = function(param1) {

};

PlayerStatusUpdateErrorMessage.prototype.getMessageId = function() {
  return 6385;
};

PlayerStatusUpdateErrorMessage.prototype.getClassName = function() {
  return 'PlayerStatusUpdateErrorMessage';
};

module.exports.id = 6385;
module.exports.class = PlayerStatusUpdateErrorMessage;
module.exports.getInstance = function() {
  return new PlayerStatusUpdateErrorMessage();
};