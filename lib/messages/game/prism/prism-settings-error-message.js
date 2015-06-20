var d2com = require('d2com'),
  BaseMessage = require('./prism-settings-error-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PrismSettingsErrorMessage = function() {

};

util.inherits(PrismSettingsErrorMessage, BaseMessage);

PrismSettingsErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismSettingsErrorMessage(output);
};

PrismSettingsErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismSettingsErrorMessage(input);
};

PrismSettingsErrorMessage.prototype.serializeAs_PrismSettingsErrorMessage = function(param1) {

};

PrismSettingsErrorMessage.prototype.deserializeAs_PrismSettingsErrorMessage = function(param1) {

};

PrismSettingsErrorMessage.prototype.getMessageId = function() {
  return 6442;
};

PrismSettingsErrorMessage.prototype.getClassName = function() {
  return 'PrismSettingsErrorMessage';
};

module.exports.id = 6442;
module.exports.class = PrismSettingsErrorMessage;
module.exports.getInstance = function() {
  return new PrismSettingsErrorMessage();
};