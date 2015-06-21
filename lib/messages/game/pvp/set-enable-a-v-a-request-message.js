var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SetEnableAVARequestMessage = module.exports = function() {
    this.enable = false;

    return this;
};

require('util').inherits(SetEnableAVARequestMessage, d2com.NetworkMessage.class);

SetEnableAVARequestMessage.prototype.serialize = function(output) {
    this.serializeAs_SetEnableAVARequestMessage(output);
};

SetEnableAVARequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SetEnableAVARequestMessage(input);
};

SetEnableAVARequestMessage.prototype.serializeAs_SetEnableAVARequestMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

SetEnableAVARequestMessage.prototype.deserializeAs_SetEnableAVARequestMessage = function(param1) {
    this.enable = param1.readBoolean();
};

SetEnableAVARequestMessage.prototype.getMessageId = function() {
    return 6443;
};

SetEnableAVARequestMessage.prototype.getClassName = function() {
    return 'SetEnableAVARequestMessage';
};

module.exports.id = 6443;