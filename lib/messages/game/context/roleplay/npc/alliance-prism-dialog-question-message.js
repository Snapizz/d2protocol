var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AlliancePrismDialogQuestionMessage = function() {

};

require('util').inherits(AlliancePrismDialogQuestionMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AlliancePrismDialogQuestionMessage();
};

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
module.exports.AlliancePrismDialogQuestionMessage = AlliancePrismDialogQuestionMessage;