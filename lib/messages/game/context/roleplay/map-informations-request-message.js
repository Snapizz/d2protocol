var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MapInformationsRequestMessage = module.exports = function() {
    this.mapId = 0;

    return this;
};

require('util').inherits(MapInformationsRequestMessage, d2com.NetworkMessage.class);

MapInformationsRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MapInformationsRequestMessage(output);
};

MapInformationsRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MapInformationsRequestMessage(input);
};

MapInformationsRequestMessage.prototype.serializeAs_MapInformationsRequestMessage = function(param1) {
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
    } else {
        param1.writeInt(this.mapId);
        return;
    }
};

MapInformationsRequestMessage.prototype.deserializeAs_MapInformationsRequestMessage = function(param1) {
    this.mapId = param1.readInt();
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element of MapInformationsRequestMessage.mapId.");
    } else {
        return;
    }
};

MapInformationsRequestMessage.prototype.getMessageId = function() {
    return 225;
};

MapInformationsRequestMessage.prototype.getClassName = function() {
    return 'MapInformationsRequestMessage';
};

module.exports.id = 225;