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

AlliancePrismDialogQuestionMessage.prototype.serializeAs_AlliancePrismDialogQuestionMessage = function(output) {

};

AlliancePrismDialogQuestionMessage.prototype.deserializeAs_AlliancePrismDialogQuestionMessage = function(input) {

};

AlliancePrismDialogQuestionMessage.prototype.getMessageId = function() {
  return 6448;
};

AlliancePrismDialogQuestionMessage.prototype.getClassName = function() {
  return 'AlliancePrismDialogQuestionMessage';
};

module.exports.id = 6448;
module.exports.class = AlliancePrismDialogQuestionMessage;