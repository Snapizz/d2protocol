var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var WrapperObjectErrorMessage = function() {

};

require('util').inherits(WrapperObjectErrorMessage, require('./symbiotic-object-error-message.js').class);

WrapperObjectErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_WrapperObjectErrorMessage(output);
};

WrapperObjectErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_WrapperObjectErrorMessage(input);
};

WrapperObjectErrorMessage.prototype.serializeAs_WrapperObjectErrorMessage = function(param1) {
    this.serializeAs_SymbioticObjectErrorMessageAs_SymbioticObjectErrorMessage(param1);
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
module.exports.class = WrapperObjectErrorMessage;
module.exports.getInstance = function() {
    return new WrapperObjectErrorMessage;
};