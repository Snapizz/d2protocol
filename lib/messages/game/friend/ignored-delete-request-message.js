var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var IgnoredDeleteRequestMessage = module.exports = function() {
    this.accountId = 0;
    this.session = false;

    return this;
};

require('util').inherits(IgnoredDeleteRequestMessage, d2com.NetworkMessage.class);

IgnoredDeleteRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_IgnoredDeleteRequestMessage(output);
};

IgnoredDeleteRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IgnoredDeleteRequestMessage(input);
};

IgnoredDeleteRequestMessage.prototype.serializeAs_IgnoredDeleteRequestMessage = function(param1) {
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
    } else {
        param1.writeInt(this.accountId);
        param1.writeBoolean(this.session);
        return;
    }
};

IgnoredDeleteRequestMessage.prototype.deserializeAs_IgnoredDeleteRequestMessage = function(param1) {
    this.accountId = param1.readInt();
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element of IgnoredDeleteRequestMessage.accountId.");
    } else {
        this.session = param1.readBoolean();
        return;
    }
};

IgnoredDeleteRequestMessage.prototype.getMessageId = function() {
    return 5680;
};

IgnoredDeleteRequestMessage.prototype.getClassName = function() {
    return 'IgnoredDeleteRequestMessage';
};

module.exports.id = 5680;