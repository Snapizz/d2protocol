var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ClientUIOpenedMessage = module.exports = function() {
    this.type = 0;

    return this;
};

require('util').inherits(ClientUIOpenedMessage, d2com.NetworkMessage.class);

ClientUIOpenedMessage.prototype.serialize = function(output) {
    this.serializeAs_ClientUIOpenedMessage(output);
};

ClientUIOpenedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ClientUIOpenedMessage(input);
};

ClientUIOpenedMessage.prototype.serializeAs_ClientUIOpenedMessage = function(param1) {
    param1.writeByte(this.type);
};

ClientUIOpenedMessage.prototype.deserializeAs_ClientUIOpenedMessage = function(param1) {
    this.type = param1.readByte();
    if (this.type < 0) {
        throw new Error("Forbidden value (" + this.type + ") on element of ClientUIOpenedMessage.type.");
    } else {
        return;
    }
};

ClientUIOpenedMessage.prototype.getMessageId = function() {
    return 6459;
};

ClientUIOpenedMessage.prototype.getClassName = function() {
    return 'ClientUIOpenedMessage';
};

module.exports.id = 6459;