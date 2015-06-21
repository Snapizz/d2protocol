var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var BasicNamedAllianceInformations = require('../../../../../types/game/context/roleplay/basic-named-alliance-informations.js').class;
var BasicGuildInformations = require('../../../../../types/game/context/roleplay/basic-guild-informations.js').class;

var AllianceTaxCollectorDialogQuestionExtendedMessage = function() {
    this.alliance = new BasicNamedAllianceInformations();
};

require('util').inherits(AllianceTaxCollectorDialogQuestionExtendedMessage, require('./tax-collector-dialog-question-extended-message.js'));

module.exports = function() {
    return new AllianceTaxCollectorDialogQuestionExtendedMessage();
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(output);
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(input);
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.serializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage = function(param1) {
    this.serializeAs_TaxCollectorDialogQuestionExtendedMessage(param1);
    this.alliance.serializeAs_BasicNamedAllianceInformations(param1);
};

AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage = function(param1) {
    this.deserializeAs_TaxCollectorDialogQuestionExtendedMessage(param1);
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
module.exports.AllianceTaxCollectorDialogQuestionExtendedMessage = AllianceTaxCollectorDialogQuestionExtendedMessage;