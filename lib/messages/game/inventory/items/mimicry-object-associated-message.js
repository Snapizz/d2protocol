var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MimicryObjectAssociatedMessage = function() {

};

require('util').inherits(MimicryObjectAssociatedMessage, require('./symbiotic-object-associated-message.js').SymbioticObjectAssociatedMessage);

module.exports = function() {
    return new MimicryObjectAssociatedMessage();
};

MimicryObjectAssociatedMessage.prototype.serialize = function(output) {
    this.serializeAs_MimicryObjectAssociatedMessage(output);
};

MimicryObjectAssociatedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MimicryObjectAssociatedMessage(input);
};

MimicryObjectAssociatedMessage.prototype.serializeAs_MimicryObjectAssociatedMessage = function(param1) {
    this.serializeAs_SymbioticObjectAssociatedMessage(param1);
};

MimicryObjectAssociatedMessage.prototype.deserializeAs_MimicryObjectAssociatedMessage = function(param1) {
    this.deserializeAs_SymbioticObjectAssociatedMessage(param1);
};

MimicryObjectAssociatedMessage.prototype.getMessageId = function() {
    return 6462;
};

MimicryObjectAssociatedMessage.prototype.getClassName = function() {
    return 'MimicryObjectAssociatedMessage';
};

module.exports.id = 6462;
module.exports.MimicryObjectAssociatedMessage = MimicryObjectAssociatedMessage;