var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismInfoInValidMessage = module.exports = function() {
    this.reason = 0;

    return this;
};

require('util').inherits(PrismInfoInValidMessage, d2com.NetworkMessage.class);

PrismInfoInValidMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismInfoInValidMessage(output);
};

PrismInfoInValidMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismInfoInValidMessage(input);
};

PrismInfoInValidMessage.prototype.serializeAs_PrismInfoInValidMessage = function(param1) {
    param1.writeByte(this.reason);
};

PrismInfoInValidMessage.prototype.deserializeAs_PrismInfoInValidMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of PrismInfoInValidMessage.reason.");
    } else {
        return;
    }
};

PrismInfoInValidMessage.prototype.getMessageId = function() {
    return 5859;
};

PrismInfoInValidMessage.prototype.getClassName = function() {
    return 'PrismInfoInValidMessage';
};

module.exports.id = 5859;