var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var KrosmasterTransferRequestMessage = module.exports = function() {
    this.uid = "";

    return this;
};

require('util').inherits(KrosmasterTransferRequestMessage, d2com.NetworkMessage.class);

KrosmasterTransferRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_KrosmasterTransferRequestMessage(output);
};

KrosmasterTransferRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_KrosmasterTransferRequestMessage(input);
};

KrosmasterTransferRequestMessage.prototype.serializeAs_KrosmasterTransferRequestMessage = function(param1) {
    param1.writeUTF(this.uid);
};

KrosmasterTransferRequestMessage.prototype.deserializeAs_KrosmasterTransferRequestMessage = function(param1) {
    this.uid = param1.readUTF();
};

KrosmasterTransferRequestMessage.prototype.getMessageId = function() {
    return 6349;
};

KrosmasterTransferRequestMessage.prototype.getClassName = function() {
    return 'KrosmasterTransferRequestMessage';
};

module.exports.id = 6349;