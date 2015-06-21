var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var LoginQueueStatusMessage = function() {
    this.position = 0;
    this.total = 0;
};

require('util').inherits(LoginQueueStatusMessage, d2com.NetworkMessage.class);

LoginQueueStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_LoginQueueStatusMessage(output);
};

LoginQueueStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LoginQueueStatusMessage(input);
};

LoginQueueStatusMessage.prototype.serializeAs_LoginQueueStatusMessage = function(param1) {
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

LoginQueueStatusMessage.prototype.deserializeAs_LoginQueueStatusMessage = function(param1) {
    this.position = param1.readUnsignedShort();
    if (this.position < 0 || this.position > 65535) {
        throw new Error("Forbidden value (" + this.position + ") on element of LoginQueueStatusMessage.position.");
    } else {
        this.total = param1.readUnsignedShort();
        if (this.total < 0 || this.total > 65535) {
            throw new Error("Forbidden value (" + this.total + ") on element of LoginQueueStatusMessage.total.");
        } else {
            return;
        }
    }
};

LoginQueueStatusMessage.prototype.getMessageId = function() {
    return 10;
};

LoginQueueStatusMessage.prototype.getClassName = function() {
    return 'LoginQueueStatusMessage';
};

module.exports.id = 10;
module.exports.class = LoginQueueStatusMessage;
module.exports.getInstance = function() {
    return new LoginQueueStatusMessage;
};