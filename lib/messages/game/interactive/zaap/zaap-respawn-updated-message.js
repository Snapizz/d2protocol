var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ZaapRespawnUpdatedMessage = function() {
    this.mapId = 0;
};

require('util').inherits(ZaapRespawnUpdatedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ZaapRespawnUpdatedMessage();
};

ZaapRespawnUpdatedMessage.prototype.serialize = function(output) {
    this.serializeAs_ZaapRespawnUpdatedMessage(output);
};

ZaapRespawnUpdatedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ZaapRespawnUpdatedMessage(input);
};

ZaapRespawnUpdatedMessage.prototype.serializeAs_ZaapRespawnUpdatedMessage = function(param1) {
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
    } else {
        param1.writeInt(this.mapId);
        return;
    }
};

ZaapRespawnUpdatedMessage.prototype.deserializeAs_ZaapRespawnUpdatedMessage = function(param1) {
    this.mapId = param1.readInt();
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element of ZaapRespawnUpdatedMessage.mapId.");
    } else {
        return;
    }
};

ZaapRespawnUpdatedMessage.prototype.getMessageId = function() {
    return 6571;
};

ZaapRespawnUpdatedMessage.prototype.getClassName = function() {
    return 'ZaapRespawnUpdatedMessage';
};

module.exports.id = 6571;
module.exports.ZaapRespawnUpdatedMessage = ZaapRespawnUpdatedMessage;