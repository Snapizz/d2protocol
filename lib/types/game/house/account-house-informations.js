var AccountHouseInformations = function() {
    this.houseId = 0;
    this.modelId = 0;
    this.worldX = 0;
    this.worldY = 0;
    this.mapId = 0;
    this.subAreaId = 0;
};

AccountHouseInformations.prototype.serialize = function(output) {
    this.serializeAs_AccountHouseInformations(output);
};

AccountHouseInformations.prototype.deserialize = function(input) {
    this.deserializeAs_AccountHouseInformations(input);
};

AccountHouseInformations.prototype.serializeAs_AccountHouseInformations = function(param1) {
    if (this.houseId < 0) {
        throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
    } else {
        param1.writeVarInt(this.houseId);
        if (this.modelId < 0) {
            throw new Error("Forbidden value (" + this.modelId + ") on element modelId.");
        } else {
            param1.writeVarShort(this.modelId);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
            } else {
                param1.writeShort(this.worldX);
                if (this.worldY < -255 || this.worldY > 255) {
                    throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
                } else {
                    param1.writeShort(this.worldY);
                    param1.writeInt(this.mapId);
                    if (this.subAreaId < 0) {
                        throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
                    } else {
                        param1.writeVarShort(this.subAreaId);
                        return;
                    }
                }
            }
        }
    }
};

AccountHouseInformations.prototype.deserializeAs_AccountHouseInformations = function(param1) {
    this.houseId = param1.readVarUhInt();
    if (this.houseId < 0) {
        throw new Error("Forbidden value (" + this.houseId + ") on element of AccountHouseInformations.houseId.");
    } else {
        this.modelId = param1.readVarUhShort();
        if (this.modelId < 0) {
            throw new Error("Forbidden value (" + this.modelId + ") on element of AccountHouseInformations.modelId.");
        } else {
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error("Forbidden value (" + this.worldX + ") on element of AccountHouseInformations.worldX.");
            } else {
                this.worldY = param1.readShort();
                if (this.worldY < -255 || this.worldY > 255) {
                    throw new Error("Forbidden value (" + this.worldY + ") on element of AccountHouseInformations.worldY.");
                } else {
                    this.mapId = param1.readInt();
                    this.subAreaId = param1.readVarUhShort();
                    if (this.subAreaId < 0) {
                        throw new Error("Forbidden value (" + this.subAreaId + ") on element of AccountHouseInformations.subAreaId.");
                    } else {
                        return;
                    }
                }
            }
        }
    }
};

AccountHouseInformations.prototype.getTypeId = function() {
    return 390;
};

AccountHouseInformations.prototype.getClassName = function() {
    return 'AccountHouseInformations';
};

module.exports.id = 390;
module.exports.class = AccountHouseInformations;
module.exports.getInstance = function() {
    return new AccountHouseInformations;
};