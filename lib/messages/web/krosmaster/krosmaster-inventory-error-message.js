var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var KrosmasterInventoryErrorMessage = module.exports = function() {
    this.reason = 0;

    return this;
};

require('util').inherits(KrosmasterInventoryErrorMessage, d2com.NetworkMessage.class);

KrosmasterInventoryErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_KrosmasterInventoryErrorMessage(output);
};

KrosmasterInventoryErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_KrosmasterInventoryErrorMessage(input);
};

KrosmasterInventoryErrorMessage.prototype.serializeAs_KrosmasterInventoryErrorMessage = function(param1) {
    param1.writeByte(this.reason);
};

KrosmasterInventoryErrorMessage.prototype.deserializeAs_KrosmasterInventoryErrorMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of KrosmasterInventoryErrorMessage.reason.");
    } else {
        return;
    }
};

KrosmasterInventoryErrorMessage.prototype.getMessageId = function() {
    return 6343;
};

KrosmasterInventoryErrorMessage.prototype.getClassName = function() {
    return 'KrosmasterInventoryErrorMessage';
};

module.exports.id = 6343;