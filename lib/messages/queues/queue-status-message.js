var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var QueueStatusMessage = function() {
    this.position = 0;
    this.total = 0;
};

require('util').inherits(QueueStatusMessage, d2com.NetworkMessage.class);

QueueStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_QueueStatusMessage(output);
};

QueueStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_QueueStatusMessage(input);
};

QueueStatusMessage.prototype.serializeAs_QueueStatusMessage = function(param1) {
    if (this.position < 0 || this.position > 65535) {
        throw new Error("Forbidden value (" + this.position + ") on element position.");
    } else {
        param1.writeShort(this.position);
        if (this.total < 0 || this.total > 65535) {
            throw new Error("Forbidden value (" + this.total + ") on element total.");
        } else {
            param1.writeShort(this.total);
            return;
        }
    }
};

QueueStatusMessage.prototype.deserializeAs_QueueStatusMessage = function(param1) {
    this.position = param1.readUnsignedShort();
    if (this.position < 0 || this.position > 65535) {
        throw new Error("Forbidden value (" + this.position + ") on element of QueueStatusMessage.position.");
    } else {
        this.total = param1.readUnsignedShort();
        if (this.total < 0 || this.total > 65535) {
            throw new Error("Forbidden value (" + this.total + ") on element of QueueStatusMessage.total.");
        } else {
            return;
        }
    }
};

QueueStatusMessage.prototype.getMessageId = function() {
    return 6100;
};

QueueStatusMessage.prototype.getClassName = function() {
    return 'QueueStatusMessage';
};

module.exports.id = 6100;
module.exports.class = QueueStatusMessage;
module.exports.getInstance = function() {
    return new QueueStatusMessage;
};