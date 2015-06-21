var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var MapCoordinates = require('../../../../types/game/context/map-coordinates.js').class;

var CompassUpdateMessage = module.exports = function() {
    this.type = 0;
    this.coords = new MapCoordinates();

    return this;
};

require('util').inherits(CompassUpdateMessage, d2com.NetworkMessage.class);

CompassUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_CompassUpdateMessage(output);
};

CompassUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CompassUpdateMessage(input);
};

CompassUpdateMessage.prototype.serializeAs_CompassUpdateMessage = function(param1) {
    param1.writeByte(this.type);
    param1.writeShort(this.coords.getTypeId());
    this.coords.serialize(param1);
};

CompassUpdateMessage.prototype.deserializeAs_CompassUpdateMessage = function(param1) {
    this.type = param1.readByte();
    if (this.type < 0) {
        throw new Error("Forbidden value (" + this.type + ") on element of CompassUpdateMessage.type.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        this.coords = ProtocolTypeManager.getInstance(MapCoordinates, _loc2_);
        this.coords.deserialize(param1);
        return;
    }
};

CompassUpdateMessage.prototype.getMessageId = function() {
    return 5591;
};

CompassUpdateMessage.prototype.getClassName = function() {
    return 'CompassUpdateMessage';
};

module.exports.id = 5591;