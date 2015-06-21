var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var BasicGuildInformations = require('../../../../../types/game/context/roleplay/basic-guild-informations.js').BasicGuildInformations;

var TaxCollectorDialogQuestionBasicMessage = function() {
    this.guildInfo = new BasicGuildInformations();
};

require('util').inherits(TaxCollectorDialogQuestionBasicMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new TaxCollectorDialogQuestionBasicMessage();
};

TaxCollectorDialogQuestionBasicMessage.prototype.serialize = function(output) {
    this.serializeAs_TaxCollectorDialogQuestionBasicMessage(output);
};

TaxCollectorDialogQuestionBasicMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TaxCollectorDialogQuestionBasicMessage(input);
};

TaxCollectorDialogQuestionBasicMessage.prototype.serializeAs_TaxCollectorDialogQuestionBasicMessage = function(param1) {
    this.guildInfo.serializeAs_BasicGuildInformations(param1);
};

TaxCollectorDialogQuestionBasicMessage.prototype.deserializeAs_TaxCollectorDialogQuestionBasicMessage = function(param1) {
    this.guildInfo = new BasicGuildInformations();
    this.guildInfo.deserialize(param1);
};

TaxCollectorDialogQuestionBasicMessage.prototype.getMessageId = function() {
    return 5619;
};

TaxCollectorDialogQuestionBasicMessage.prototype.getClassName = function() {
    return 'TaxCollectorDialogQuestionBasicMessage';
};

module.exports.id = 5619;
module.exports.TaxCollectorDialogQuestionBasicMessage = TaxCollectorDialogQuestionBasicMessage;