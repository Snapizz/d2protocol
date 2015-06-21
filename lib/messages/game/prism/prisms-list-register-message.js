var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismsListRegisterMessage = function() {
    this.listen = 0;
};

require('util').inherits(PrismsListRegisterMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new PrismsListRegisterMessage();
};

PrismsListRegisterMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismsListRegisterMessage(output);
};

PrismsListRegisterMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismsListRegisterMessage(input);
};

PrismsListRegisterMessage.prototype.serializeAs_PrismsListRegisterMessage = function(param1) {
    param1.writeByte(this.listen);
};

PrismsListRegisterMessage.prototype.deserializeAs_PrismsListRegisterMessage = function(param1) {
    this.listen = param1.readByte();
    if (this.listen < 0) {
        throw new Error("Forbidden value (" + this.listen + ") on element of PrismsListRegisterMessage.listen.");
    } else {
        return;
    }
};

PrismsListRegisterMessage.prototype.getMessageId = function() {
    return 6441;
};

PrismsListRegisterMessage.prototype.getClassName = function() {
    return 'PrismsListRegisterMessage';
};

module.exports.id = 6441;
module.exports.PrismsListRegisterMessage = PrismsListRegisterMessage;