var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var KrosmasterTransferMessage = module.exports = function() {
    this.uid = "";
    this.failure = 0;

    return this;
};

require('util').inherits(KrosmasterTransferMessage, d2com.NetworkMessage.class);

KrosmasterTransferMessage.prototype.serialize = function(output) {
    this.serializeAs_KrosmasterTransferMessage(output);
};

KrosmasterTransferMessage.prototype.deserialize = function(input) {
    this.deserializeAs_KrosmasterTransferMessage(input);
};

KrosmasterTransferMessage.prototype.serializeAs_KrosmasterTransferMessage = function(param1) {
    param1.writeUTF(this.uid);
    param1.writeByte(this.failure);
};

KrosmasterTransferMessage.prototype.deserializeAs_KrosmasterTransferMessage = function(param1) {
    this.uid = param1.readUTF();
    this.failure = param1.readByte();
    if (this.failure < 0) {
        throw new Error("Forbidden value (" + this.failure + ") on element of KrosmasterTransferMessage.failure.");
    } else {
        return;
    }
};

KrosmasterTransferMessage.prototype.getMessageId = function() {
    return 6348;
};

KrosmasterTransferMessage.prototype.getClassName = function() {
    return 'KrosmasterTransferMessage';
};

module.exports.id = 6348;