var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountSetXpRatioRequestMessage = function() {
    this.xpRatio = 0;
};

require('util').inherits(MountSetXpRatioRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new MountSetXpRatioRequestMessage();
};

MountSetXpRatioRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MountSetXpRatioRequestMessage(output);
};

MountSetXpRatioRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountSetXpRatioRequestMessage(input);
};

MountSetXpRatioRequestMessage.prototype.serializeAs_MountSetXpRatioRequestMessage = function(param1) {
    if (this.xpRatio < 0) {
        throw new Error("Forbidden value (" + this.xpRatio + ") on element xpRatio.");
    } else {
        param1.writeByte(this.xpRatio);
        return;
    }
};

MountSetXpRatioRequestMessage.prototype.deserializeAs_MountSetXpRatioRequestMessage = function(param1) {
    this.xpRatio = param1.readByte();
    if (this.xpRatio < 0) {
        throw new Error("Forbidden value (" + this.xpRatio + ") on element of MountSetXpRatioRequestMessage.xpRatio.");
    } else {
        return;
    }
};

MountSetXpRatioRequestMessage.prototype.getMessageId = function() {
    return 5989;
};

MountSetXpRatioRequestMessage.prototype.getClassName = function() {
    return 'MountSetXpRatioRequestMessage';
};

module.exports.id = 5989;
module.exports.MountSetXpRatioRequestMessage = MountSetXpRatioRequestMessage;