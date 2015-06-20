var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var AllianceCreationStartedMessage = function() {

};

util.inherits(AllianceCreationStartedMessage, BaseMessage);

AllianceCreationStartedMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceCreationStartedMessage(output);
};

AllianceCreationStartedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceCreationStartedMessage(input);
};

AllianceCreationStartedMessage.prototype.serializeAs_AllianceCreationStartedMessage = function(param1) {

};

AllianceCreationStartedMessage.prototype.deserializeAs_AllianceCreationStartedMessage = function(param1) {

};

AllianceCreationStartedMessage.prototype.getMessageId = function() {
  return 6394;
};

AllianceCreationStartedMessage.prototype.getClassName = function() {
  return 'AllianceCreationStartedMessage';
};

module.exports.id = 6394;
module.exports.class = AllianceCreationStartedMessage;
module.exports.getInstance = function() {
  return new AllianceCreationStartedMessage();
};