var d2com = require('d2com'),
  BaseMessage = require('./tax-collector-dialog-question-extended-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceTaxCollectorDialogQuestionExtendedMessage = function() {
  this.alliance;
};

util.inherits(AllianceTaxCollectorDialogQuestionExtendedMessage, BaseMessage);

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(output);
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(input);
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.serializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage = function(output) {
  this.serializeAs_TaxCollectorDialogQuestionExtendedMessage(output);
  this.alliance.serializeAs_BasicNamedAllianceInformations(output);
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage = function(input) {
  this.deserialize(input);
  this.alliance = new BasicNamedAllianceInformations();
  this.alliance.deserialize(input);
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.getMessageId = function() {
  return 6445;
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.getClassName = function() {
  return 'AllianceTaxCollectorDialogQuestionExtendedMessage';
};

module.exports.id = 6445;
module.exports.class = AllianceTaxCollectorDialogQuestionExtendedMessage;