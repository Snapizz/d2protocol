var PrismSubareaEmptyInfo = function() {
    this.subAreaId = 0;
    this.allianceId = 0;
};

PrismSubareaEmptyInfo.prototype.serialize = function(output) {
    this.serializeAs_PrismSubareaEmptyInfo(output);
};

PrismSubareaEmptyInfo.prototype.deserialize = function(input) {
    this.deserializeAs_PrismSubareaEmptyInfo(input);
};

PrismSubareaEmptyInfo.prototype.serializeAs_PrismSubareaEmptyInfo = function(param1) {
    if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
    } else {
        param1.writeVarShort(this.subAreaId);
        if (this.allianceId < 0) {
            throw new Error("Forbidden value (" + this.allianceId + ") on element allianceId.");
        } else {
            param1.writeVarInt(this.allianceId);
            return;
        }
    }
};

PrismSubareaEmptyInfo.prototype.deserializeAs_PrismSubareaEmptyInfo = function(param1) {
    this.subAreaId = param1.readVarUhShort();
    if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismSubareaEmptyInfo.subAreaId.");
    } else {
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error("Forbidden value (" + this.allianceId + ") on element of PrismSubareaEmptyInfo.allianceId.");
        } else {
            return;
        }
    }
};

PrismSubareaEmptyInfo.prototype.getTypeId = function() {
    return 438;
};

PrismSubareaEmptyInfo.prototype.getClassName = function() {
    return 'PrismSubareaEmptyInfo';
};

module.exports.id = 438;
module.exports.class = PrismSubareaEmptyInfo;
module.exports.getInstance = function() {
    return new PrismSubareaEmptyInfo;
};