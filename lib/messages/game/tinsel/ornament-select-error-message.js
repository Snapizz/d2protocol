var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var OrnamentSelectErrorMessage = module.exports = function() {
    this.reason = 0;

    return this;
};

require('util').inherits(OrnamentSelectErrorMessage, d2com.NetworkMessage.class);

OrnamentSelectErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_OrnamentSelectErrorMessage(output);
};

OrnamentSelectErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_OrnamentSelectErrorMessage(input);
};

OrnamentSelectErrorMessage.prototype.serializeAs_OrnamentSelectErrorMessage = function(param1) {
    param1.writeByte(this.reason);
};

OrnamentSelectErrorMessage.prototype.deserializeAs_OrnamentSelectErrorMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of OrnamentSelectErrorMessage.reason.");
    } else {
        return;
    }
};

OrnamentSelectErrorMessage.prototype.getMessageId = function() {
    return 6370;
};

OrnamentSelectErrorMessage.prototype.getClassName = function() {
    return 'OrnamentSelectErrorMessage';
};

module.exports.id = 6370;