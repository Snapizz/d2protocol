var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var AlliancePartialListMessage = function() {

};

util.inherits(AlliancePartialListMessage, BaseMessage);

AlliancePartialListMessage.prototype.serialize = function(output) {
  this.serializeAs_AlliancePartialListMessage(output);
};

AlliancePartialListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AlliancePartialListMessage(input);
};

AlliancePartialListMessage.prototype.serializeAs_AlliancePartialListMessage = function(param1) {
  this.serializeAs_AllianceListMessage(param1);
};

AlliancePartialListMessage.prototype.deserializeAs_AlliancePartialListMessage = function(param1) {
  this.deserialize(param1);
};

AlliancePartialListMessage.prototype.getMessageId = function() {
  return 6427;
};

AlliancePartialListMessage.prototype.getClassName = function() {
  return 'AlliancePartialListMessage';
};

module.exports.id = 6427;
module.exports.class = AlliancePartialListMessage;
module.exports.getInstance = function() {
  return new AlliancePartialListMessage();
};