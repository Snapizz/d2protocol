var ObjectEffectDate = module.exports = function() {
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.minute = 0;

    return this;
};

require('util').inherits(ObjectEffectDate, require('./object-effect.js'));

ObjectEffectDate.prototype.serialize = function(output) {
    this.serializeAs_ObjectEffectDate(output);
};

ObjectEffectDate.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectEffectDate(input);
};

ObjectEffectDate.prototype.serializeAs_ObjectEffectDate = function(param1) {
    this.serializeAs_ObjectEffect(param1);
    if (this.year < 0) {
        throw new Error("Forbidden value (" + this.year + ") on element year.");
    } else {
        param1.writeVarShort(this.year);
        if (this.month < 0) {
            throw new Error("Forbidden value (" + this.month + ") on element month.");
        } else {
            param1.writeByte(this.month);
            if (this.day < 0) {
                throw new Error("Forbidden value (" + this.day + ") on element day.");
            } else {
                param1.writeByte(this.day);
                if (this.hour < 0) {
                    throw new Error("Forbidden value (" + this.hour + ") on element hour.");
                } else {
                    param1.writeByte(this.hour);
                    if (this.minute < 0) {
                        throw new Error("Forbidden value (" + this.minute + ") on element minute.");
                    } else {
                        param1.writeByte(this.minute);
                        return;
                    }
                }
            }
        }
    }
};

ObjectEffectDate.prototype.deserializeAs_ObjectEffectDate = function(param1) {
    this.deserializeAs_ObjectEffect(param1);
    this.year = param1.readVarUhShort();
    if (this.year < 0) {
        throw new Error("Forbidden value (" + this.year + ") on element of ObjectEffectDate.year.");
    } else {
        this.month = param1.readByte();
        if (this.month < 0) {
            throw new Error("Forbidden value (" + this.month + ") on element of ObjectEffectDate.month.");
        } else {
            this.day = param1.readByte();
            if (this.day < 0) {
                throw new Error("Forbidden value (" + this.day + ") on element of ObjectEffectDate.day.");
            } else {
                this.hour = param1.readByte();
                if (this.hour < 0) {
                    throw new Error("Forbidden value (" + this.hour + ") on element of ObjectEffectDate.hour.");
                } else {
                    this.minute = param1.readByte();
                    if (this.minute < 0) {
                        throw new Error("Forbidden value (" + this.minute + ") on element of ObjectEffectDate.minute.");
                    } else {
                        return;
                    }
                }
            }
        }
    }
};

ObjectEffectDate.prototype.getTypeId = function() {
    return 72;
};

ObjectEffectDate.prototype.getClassName = function() {
    return 'ObjectEffectDate';
};

module.exports.id = 72;