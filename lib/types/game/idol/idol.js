var Idol = function() {
    this.id = 0;
    this.xpBonusPercent = 0;
    this.dropBonusPercent = 0;
};

module.exports = function() {
    return new Idol();
};

Idol.prototype.serialize = function(output) {
    this.serializeAs_Idol(output);
};

Idol.prototype.deserialize = function(input) {
    this.deserializeAs_Idol(input);
};

Idol.prototype.serializeAs_Idol = function(param1) {
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element id.");
    } else {
        param1.writeVarShort(this.id);
        if (this.xpBonusPercent < 0) {
            throw new Error("Forbidden value (" + this.xpBonusPercent + ") on element xpBonusPercent.");
        } else {
            param1.writeVarShort(this.xpBonusPercent);
            if (this.dropBonusPercent < 0) {
                throw new Error("Forbidden value (" + this.dropBonusPercent + ") on element dropBonusPercent.");
            } else {
                param1.writeVarShort(this.dropBonusPercent);
                return;
            }
        }
    }
};

Idol.prototype.deserializeAs_Idol = function(param1) {
    this.id = param1.readVarUhShort();
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element of Idol.id.");
    } else {
        this.xpBonusPercent = param1.readVarUhShort();
        if (this.xpBonusPercent < 0) {
            throw new Error("Forbidden value (" + this.xpBonusPercent + ") on element of Idol.xpBonusPercent.");
        } else {
            this.dropBonusPercent = param1.readVarUhShort();
            if (this.dropBonusPercent < 0) {
                throw new Error("Forbidden value (" + this.dropBonusPercent + ") on element of Idol.dropBonusPercent.");
            } else {
                return;
            }
        }
    }
};

Idol.prototype.getTypeId = function() {
    return 489;
};

Idol.prototype.getClassName = function() {
    return 'Idol';
};

module.exports.id = 489;
module.exports.Idol = Idol;