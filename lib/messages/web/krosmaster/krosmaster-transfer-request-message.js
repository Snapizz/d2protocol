var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var KrosmasterTransferRequestMessage = function() {
    this.uid = "";
};

require('util').inherits(KrosmasterTransferRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new KrosmasterTransferRequestMessage();
};

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
module.exports.KrosmasterTransferRequestMessage = KrosmasterTransferRequestMessage;