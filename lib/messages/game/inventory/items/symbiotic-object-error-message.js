var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SymbioticObjectErrorMessage = function() {
    this.errorCode = 0;
};

require('util').inherits(SymbioticObjectErrorMessage, require('./object-error-message.js').ObjectErrorMessage);

module.exports = function() {
    return new SymbioticObjectErrorMessage();
};

SymbioticObjectErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_SymbioticObjectErrorMessage(output);
};

SymbioticObjectErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SymbioticObjectErrorMessage(input);
};

SymbioticObjectErrorMessage.prototype.serializeAs_SymbioticObjectErrorMessage = function(param1) {
    this.serializeAs_ObjectErrorMessage(param1);
    param1.writeByte(this.errorCode);
};

SymbioticObjectErrorMessage.prototype.deserializeAs_SymbioticObjectErrorMessage = function(param1) {
    this.deserializeAs_ObjectErrorMessage(param1);
    this.errorCode = param1.readByte();
};

SymbioticObjectErrorMessage.prototype.getMessageId = function() {
    return 6526;
};

SymbioticObjectErrorMessage.prototype.getClassName = function() {
    return 'SymbioticObjectErrorMessage';
};

module.exports.id = 6526;
module.exports.SymbioticObjectErrorMessage = SymbioticObjectErrorMessage;