var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var AlliancePrismDialogQuestionMessage = function() {

};

util.inherits(AlliancePrismDialogQuestionMessage, BaseMessage);

AlliancePrismDialogQuestionMessage.prototype.serialize = function(output) {
  this.serializeAs_AlliancePrismDialogQuestionMessage(output);
};

AlliancePrismDialogQuestionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AlliancePrismDialogQuestionMessage(input);
};

AlliancePrismDialogQuestionMessage.prototype.serializeAs_AlliancePrismDialogQuestionMessage = function(param1) {

};

AlliancePrismDialogQuestionMessage.prototype.deserializeAs_AlliancePrismDialogQuestionMessage = function(param1) {

};

AlliancePrismDialogQuestionMessage.prototype.getMessageId = function() {
  return 6448;
};

AlliancePrismDialogQuestionMessage.prototype.getClassName = function() {
  return 'AlliancePrismDialogQuestionMessage';
};

module.exports.id = 6448;
module.exports.class = AlliancePrismDialogQuestionMessage;
module.exports.getInstance = function() {
  return new AlliancePrismDialogQuestionMessage();
};