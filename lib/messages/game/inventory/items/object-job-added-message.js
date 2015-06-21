var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectJobAddedMessage = function() {
    this.jobId = 0;
};

require('util').inherits(ObjectJobAddedMessage, d2com.NetworkMessage.class);

ObjectJobAddedMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectJobAddedMessage(output);
};

ObjectJobAddedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectJobAddedMessage(input);
};

ObjectJobAddedMessage.prototype.serializeAs_ObjectJobAddedMessage = function(param1) {
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
    } else {
        param1.writeByte(this.jobId);
        return;
    }
};

ObjectJobAddedMessage.prototype.deserializeAs_ObjectJobAddedMessage = function(param1) {
    this.jobId = param1.readByte();
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element of ObjectJobAddedMessage.jobId.");
    } else {
        return;
    }
};

ObjectJobAddedMessage.prototype.getMessageId = function() {
    return 6014;
};

ObjectJobAddedMessage.prototype.getClassName = function() {
    return 'ObjectJobAddedMessage';
};

module.exports.id = 6014;
module.exports.class = ObjectJobAddedMessage;
module.exports.getInstance = function() {
    return new ObjectJobAddedMessage;
};