var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var IdolPartyRegisterRequestMessage = function() {
    this.register = false;
};

require('util').inherits(IdolPartyRegisterRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new IdolPartyRegisterRequestMessage();
};

IdolPartyRegisterRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_IdolPartyRegisterRequestMessage(output);
};

IdolPartyRegisterRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdolPartyRegisterRequestMessage(input);
};

IdolPartyRegisterRequestMessage.prototype.serializeAs_IdolPartyRegisterRequestMessage = function(param1) {
    param1.writeBoolean(this.register);
};

IdolPartyRegisterRequestMessage.prototype.deserializeAs_IdolPartyRegisterRequestMessage = function(param1) {
    this.register = param1.readBoolean();
};

IdolPartyRegisterRequestMessage.prototype.getMessageId = function() {
    return 6582;
};

IdolPartyRegisterRequestMessage.prototype.getClassName = function() {
    return 'IdolPartyRegisterRequestMessage';
};

module.exports.id = 6582;
module.exports.IdolPartyRegisterRequestMessage = IdolPartyRegisterRequestMessage;