var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountXpRatioMessage = module.exports = function() {
    this.ratio = 0;

    return this;
};

require('util').inherits(MountXpRatioMessage, d2com.NetworkMessage.class);

MountXpRatioMessage.prototype.serialize = function(output) {
    this.serializeAs_MountXpRatioMessage(output);
};

MountXpRatioMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountXpRatioMessage(input);
};

MountXpRatioMessage.prototype.serializeAs_MountXpRatioMessage = function(param1) {
    if (this.ratio < 0) {
        throw new Error("Forbidden value (" + this.ratio + ") on element ratio.");
    } else {
        param1.writeByte(this.ratio);
        return;
    }
};

MountXpRatioMessage.prototype.deserializeAs_MountXpRatioMessage = function(param1) {
    this.ratio = param1.readByte();
    if (this.ratio < 0) {
        throw new Error("Forbidden value (" + this.ratio + ") on element of MountXpRatioMessage.ratio.");
    } else {
        return;
    }
};

MountXpRatioMessage.prototype.getMessageId = function() {
    return 5970;
};

MountXpRatioMessage.prototype.getClassName = function() {
    return 'MountXpRatioMessage';
};

module.exports.id = 5970;