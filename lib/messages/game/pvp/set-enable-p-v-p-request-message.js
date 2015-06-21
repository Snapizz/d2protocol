var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SetEnablePVPRequestMessage = function() {
    this.enable = false;
};

require('util').inherits(SetEnablePVPRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new SetEnablePVPRequestMessage();
};

SetEnablePVPRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_SetEnablePVPRequestMessage(output);
};

SetEnablePVPRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SetEnablePVPRequestMessage(input);
};

SetEnablePVPRequestMessage.prototype.serializeAs_SetEnablePVPRequestMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

SetEnablePVPRequestMessage.prototype.deserializeAs_SetEnablePVPRequestMessage = function(param1) {
    this.enable = param1.readBoolean();
};

SetEnablePVPRequestMessage.prototype.getMessageId = function() {
    return 1810;
};

SetEnablePVPRequestMessage.prototype.getClassName = function() {
    return 'SetEnablePVPRequestMessage';
};

module.exports.id = 1810;
module.exports.SetEnablePVPRequestMessage = SetEnablePVPRequestMessage;