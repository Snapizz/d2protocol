var UpdateMountBoost = module.exports = function() {
    this.type = 0;

    return this;
};

UpdateMountBoost.prototype.serialize = function(output) {
    this.serializeAs_UpdateMountBoost(output);
};

UpdateMountBoost.prototype.deserialize = function(input) {
    this.deserializeAs_UpdateMountBoost(input);
};

UpdateMountBoost.prototype.serializeAs_UpdateMountBoost = function(param1) {
    param1.writeByte(this.type);
};

UpdateMountBoost.prototype.deserializeAs_UpdateMountBoost = function(param1) {
    this.type = param1.readByte();
    if (this.type < 0) {
        throw new Error("Forbidden value (" + this.type + ") on element of UpdateMountBoost.type.");
    } else {
        return;
    }
};

UpdateMountBoost.prototype.getTypeId = function() {
    return 356;
};

UpdateMountBoost.prototype.getClassName = function() {
    return 'UpdateMountBoost';
};

module.exports.id = 356;