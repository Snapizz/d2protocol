var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var MimicryObjectErrorMessage = function() {
    this.preview = false;
};

require('util').inherits(MimicryObjectErrorMessage, require('./symbiotic-object-error-message.js').class);

MimicryObjectErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_MimicryObjectErrorMessage(output);
};

MimicryObjectErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MimicryObjectErrorMessage(input);
};

MimicryObjectErrorMessage.prototype.serializeAs_MimicryObjectErrorMessage = function(param1) {
    this.serializeAs_SymbioticObjectErrorMessageAs_SymbioticObjectErrorMessage(param1);
    param1.writeBoolean(this.preview);
};

MimicryObjectErrorMessage.prototype.deserializeAs_MimicryObjectErrorMessage = function(param1) {
    this.deserializeAs_SymbioticObjectErrorMessage(param1);
    this.preview = param1.readBoolean();
};

MimicryObjectErrorMessage.prototype.getMessageId = function() {
    return 6461;
};

MimicryObjectErrorMessage.prototype.getClassName = function() {
    return 'MimicryObjectErrorMessage';
};

module.exports.id = 6461;
module.exports.class = MimicryObjectErrorMessage;
module.exports.getInstance = function() {
    return new MimicryObjectErrorMessage;
};