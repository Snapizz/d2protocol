var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations.js').class;

var AlliancePartialListMessage = function() {

};

require('util').inherits(AlliancePartialListMessage, require('./alliance-list-message.js').class);

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
    this.deserializeAs_AllianceListMessage(param1);
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
    return new AlliancePartialListMessage;
};