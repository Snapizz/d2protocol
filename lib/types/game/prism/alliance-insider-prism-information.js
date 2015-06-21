var AllianceInsiderPrismInformation = module.exports = function() {
    this.lastTimeSlotModificationDate = 0;
    this.lastTimeSlotModificationAuthorGuildId = 0;
    this.lastTimeSlotModificationAuthorId = 0;
    this.lastTimeSlotModificationAuthorName = "";
    this.modulesItemIds = [];

    return this;
};

require('util').inherits(AllianceInsiderPrismInformation, require('./prism-information.js'));

AllianceInsiderPrismInformation.prototype.serialize = function(output) {
    this.serializeAs_AllianceInsiderPrismInformation(output);
};

AllianceInsiderPrismInformation.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceInsiderPrismInformation(input);
};

AllianceInsiderPrismInformation.prototype.serializeAs_AllianceInsiderPrismInformation = function(param1) {
    this.serializeAs_PrismInformation(param1);
    if (this.lastTimeSlotModificationDate < 0) {
        throw new Error("Forbidden value (" + this.lastTimeSlotModificationDate + ") on element lastTimeSlotModificationDate.");
    } else {
        param1.writeInt(this.lastTimeSlotModificationDate);
        if (this.lastTimeSlotModificationAuthorGuildId < 0) {
            throw new Error("Forbidden value (" + this.lastTimeSlotModificationAuthorGuildId + ") on element lastTimeSlotModificationAuthorGuildId.");
        } else {
            param1.writeVarInt(this.lastTimeSlotModificationAuthorGuildId);
            if (this.lastTimeSlotModificationAuthorId < 0) {
                throw new Error("Forbidden value (" + this.lastTimeSlotModificationAuthorId + ") on element lastTimeSlotModificationAuthorId.");
            } else {
                param1.writeVarInt(this.lastTimeSlotModificationAuthorId);
                param1.writeUTF(this.lastTimeSlotModificationAuthorName);
                param1.writeShort(this.modulesItemIds.length);
                var _loc2_ = 0;
                while (_loc2_ < this.modulesItemIds.length) {
                    if (this.modulesItemIds[_loc2_] < 0) {
                        throw new Error("Forbidden value (" + this.modulesItemIds[_loc2_] + ") on element 5 (starting at 1) of modulesItemIds.");
                    } else {
                        param1.writeVarInt(this.modulesItemIds[_loc2_]);
                        _loc2_++;
                        continue;
                    }
                }
                return;
            }
        }
    }
};

AllianceInsiderPrismInformation.prototype.deserializeAs_AllianceInsiderPrismInformation = function(param1) {
    var _loc4_ = 0;
    this.deserializeAs_PrismInformation(param1);
    this.lastTimeSlotModificationDate = param1.readInt();
    if (this.lastTimeSlotModificationDate < 0) {
        throw new Error("Forbidden value (" + this.lastTimeSlotModificationDate + ") on element of AllianceInsiderPrismInformation.lastTimeSlotModificationDate.");
    } else {
        this.lastTimeSlotModificationAuthorGuildId = param1.readVarUhInt();
        if (this.lastTimeSlotModificationAuthorGuildId < 0) {
            throw new Error("Forbidden value (" + this.lastTimeSlotModificationAuthorGuildId + ") on element of AllianceInsiderPrismInformation.lastTimeSlotModificationAuthorGuildId.");
        } else {
            this.lastTimeSlotModificationAuthorId = param1.readVarUhInt();
            if (this.lastTimeSlotModificationAuthorId < 0) {
                throw new Error("Forbidden value (" + this.lastTimeSlotModificationAuthorId + ") on element of AllianceInsiderPrismInformation.lastTimeSlotModificationAuthorId.");
            } else {
                this.lastTimeSlotModificationAuthorName = param1.readUTF();
                var _loc2_ = param1.readUnsignedShort();
                var _loc3_ = 0;
                while (_loc3_ < _loc2_) {
                    _loc4_ = param1.readVarUhInt();
                    if (_loc4_ < 0) {
                        throw new Error("Forbidden value (" + _loc4_ + ") on elements of modulesItemIds.");
                    } else {
                        this.modulesItemIds.push(_loc4_);
                        _loc3_++;
                        continue;
                    }
                }
                return;
            }
        }
    }
};

AllianceInsiderPrismInformation.prototype.getTypeId = function() {
    return 431;
};

AllianceInsiderPrismInformation.prototype.getClassName = function() {
    return 'AllianceInsiderPrismInformation';
};

module.exports.id = 431;