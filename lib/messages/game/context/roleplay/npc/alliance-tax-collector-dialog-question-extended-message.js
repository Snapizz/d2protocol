var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  super.serializeAs_TaxCollectorDialogQuestionExtendedMessage(param1);
  this.alliance.serializeAs_BasicNamedAllianceInformations(param1);
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage = function(input) {
  super.deserialize(param1);
  this.alliance = new BasicNamedAllianceInformations();
  this.alliance.deserialize(param1);
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.getMessageId = function() {
  return 6445;
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.getClassName = function() {
  return 'AllianceTaxCollectorDialogQuestionExtendedMessage';
};

module.exports.id = 6445;
module.exports.class = AllianceTaxCollectorDialogQuestionExtendedMessage;