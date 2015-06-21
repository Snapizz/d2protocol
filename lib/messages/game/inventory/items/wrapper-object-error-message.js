var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var WrapperObjectErrorMessage = function() {

};

require('util').inherits(WrapperObjectErrorMessage, require('./symbiotic-object-error-message.js').SymbioticObjectErrorMessage);

module.exports = function() {
    return new WrapperObjectErrorMessage();
};

WrapperObjectErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_WrapperObjectErrorMessage(output);
};

WrapperObjectErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_WrapperObjectErrorMessage(input);
};

WrapperObjectErrorMessage.prototype.serializeAs_WrapperObjectErrorMessage = function(param1) {
    this.serializeAs_SymbioticObjectErrorMessage(param1);
};

WrapperObjectErrorMessage.prototype.deserializeAs_WrapperObjectErrorMessage = function(param1) {
    this.deserializeAs_SymbioticObjectErrorMessage(param1);
};

WrapperObjectErrorMessage.prototype.getMessageId = function() {
    return 6529;
};

WrapperObjectErrorMessage.prototype.getClassName = function() {
    return 'WrapperObjectErrorMessage';
};

module.exports.id = 6529;
module.exports.WrapperObjectErrorMessage = WrapperObjectErrorMessage;