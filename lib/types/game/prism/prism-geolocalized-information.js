var PrismGeolocalizedInformation = function() {
    this.worldX = 0;
    this.worldY = 0;
    this.mapId = 0;
    this.prism = new PrismInformation();
};

require('util').inherits(PrismGeolocalizedInformation, require('./prism-subarea-empty-info.js').class);

PrismGeolocalizedInformation.prototype.serialize = function(output) {
    this.serializeAs_PrismGeolocalizedInformation(output);
};

PrismGeolocalizedInformation.prototype.deserialize = function(input) {
    this.deserializeAs_PrismGeolocalizedInformation(input);
};

PrismGeolocalizedInformation.prototype.serializeAs_PrismGeolocalizedInformation = function(param1) {
    this.serializeAs_PrismSubareaEmptyInfo(param1);
    if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
    } else {
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
        } else {
            param1.writeShort(this.worldY);
            param1.writeInt(this.mapId);
            param1.writeShort(this.prism.getTypeId());
            this.prism.serialize(param1);
            return;
        }
    }
};

PrismGeolocalizedInformation.prototype.deserializeAs_PrismGeolocalizedInformation = function(param1) {
    this.deserializeAs_PrismSubareaEmptyInfo(param1);
    this.worldX = param1.readShort();
    if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element of PrismGeolocalizedInformation.worldX.");
    } else {
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error("Forbidden value (" + this.worldY + ") on element of PrismGeolocalizedInformation.worldY.");
        } else {
            this.mapId = param1.readInt();
            var _loc2_ = param1.readUnsignedShort();
            this.prism = ProtocolTypeManager.getInstance(PrismInformation, _loc2_);
            this.prism.deserialize(param1);
            return;
        }
    }
};

PrismGeolocalizedInformation.prototype.getTypeId = function() {
    return 434;
};

PrismGeolocalizedInformation.prototype.getClassName = function() {
    return 'PrismGeolocalizedInformation';
};

module.exports.id = 434;
module.exports.class = PrismGeolocalizedInformation;
module.exports.getInstance = function() {
    return new PrismGeolocalizedInformation;
};