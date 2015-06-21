var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var WrapperObjectAssociatedMessage = function() {

};

require('util').inherits(WrapperObjectAssociatedMessage, require('./symbiotic-object-associated-message.js'));

module.exports = function() {
    return new WrapperObjectAssociatedMessage();
};

WrapperObjectAssociatedMessage.prototype.serialize = function(output) {
    this.serializeAs_WrapperObjectAssociatedMessage(output);
};

WrapperObjectAssociatedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_WrapperObjectAssociatedMessage(input);
};

WrapperObjectAssociatedMessage.prototype.serializeAs_WrapperObjectAssociatedMessage = function(param1) {
    this.serializeAs_SymbioticObjectAssociatedMessage(param1);
};

WrapperObjectAssociatedMessage.prototype.deserializeAs_WrapperObjectAssociatedMessage = function(param1) {
    this.deserializeAs_SymbioticObjectAssociatedMessage(param1);
};

WrapperObjectAssociatedMessage.prototype.getMessageId = function() {
    return 6523;
};

WrapperObjectAssociatedMessage.prototype.getClassName = function() {
    return 'WrapperObjectAssociatedMessage';
};

module.exports.id = 6523;
module.exports.WrapperObjectAssociatedMessage = WrapperObjectAssociatedMessage;