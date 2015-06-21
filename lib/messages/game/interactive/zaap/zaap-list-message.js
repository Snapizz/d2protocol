var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ZaapListMessage = function() {
    this.spawnMapId = 0;
};

require('util').inherits(ZaapListMessage, require('./teleport-destinations-list-message.js').class);

ZaapListMessage.prototype.serialize = function(output) {
    this.serializeAs_ZaapListMessage(output);
};

ZaapListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ZaapListMessage(input);
};

ZaapListMessage.prototype.serializeAs_ZaapListMessage = function(param1) {
    this.serializeAs_TeleportDestinationsListMessageAs_TeleportDestinationsListMessage(param1);
    if (this.spawnMapId < 0) {
        throw new Error("Forbidden value (" + this.spawnMapId + ") on element spawnMapId.");
    } else {
        param1.writeInt(this.spawnMapId);
        return;
    }
};

ZaapListMessage.prototype.deserializeAs_ZaapListMessage = function(param1) {
    this.deserializeAs_TeleportDestinationsListMessage(param1);
    this.spawnMapId = param1.readInt();
    if (this.spawnMapId < 0) {
        throw new Error("Forbidden value (" + this.spawnMapId + ") on element of ZaapListMessage.spawnMapId.");
    } else {
        return;
    }
};

ZaapListMessage.prototype.getMessageId = function() {
    return 1604;
};

ZaapListMessage.prototype.getClassName = function() {
    return 'ZaapListMessage';
};

module.exports.id = 1604;
module.exports.class = ZaapListMessage;
module.exports.getInstance = function() {
    return new ZaapListMessage;
};