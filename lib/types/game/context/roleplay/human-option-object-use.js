var HumanOptionObjectUse = function() {
    this.delayTypeId = 0;
    this.delayEndTime = 0;
    this.objectGID = 0;
};

require('util').inherits(HumanOptionObjectUse, require('./human-option.js').HumanOption);

module.exports = function() {
    return new HumanOptionObjectUse();
};

HumanOptionObjectUse.prototype.serialize = function(output) {
    this.serializeAs_HumanOptionObjectUse(output);
};

HumanOptionObjectUse.prototype.deserialize = function(input) {
    this.deserializeAs_HumanOptionObjectUse(input);
};

HumanOptionObjectUse.prototype.serializeAs_HumanOptionObjectUse = function(param1) {
    this.serializeAs_HumanOption(param1);
    param1.writeByte(this.delayTypeId);
    if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.delayEndTime + ") on element delayEndTime.");
    } else {
        param1.writeDouble(this.delayEndTime);
        if (this.objectGID < 0) {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        } else {
            param1.writeVarShort(this.objectGID);
            return;
        }
    }
};

HumanOptionObjectUse.prototype.deserializeAs_HumanOptionObjectUse = function(param1) {
    this.deserializeAs_HumanOption(param1);
    this.delayTypeId = param1.readByte();
    if (this.delayTypeId < 0) {
        throw new Error("Forbidden value (" + this.delayTypeId + ") on element of HumanOptionObjectUse.delayTypeId.");
    } else {
        this.delayEndTime = param1.readDouble();
        if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.delayEndTime + ") on element of HumanOptionObjectUse.delayEndTime.");
        } else {
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error("Forbidden value (" + this.objectGID + ") on element of HumanOptionObjectUse.objectGID.");
            } else {
                return;
            }
        }
    }
};

HumanOptionObjectUse.prototype.getTypeId = function() {
    return 449;
};

HumanOptionObjectUse.prototype.getClassName = function() {
    return 'HumanOptionObjectUse';
};

module.exports.id = 449;
module.exports.HumanOptionObjectUse = HumanOptionObjectUse;