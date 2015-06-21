var ObjectEffectMount = function() {
    this.mountId = 0;
    this.date = 0;
    this.modelId = 0;
};

require('util').inherits(ObjectEffectMount, require('./object-effect.js'));

module.exports = function() {
    return new ObjectEffectMount();
};

ObjectEffectMount.prototype.serialize = function(output) {
    this.serializeAs_ObjectEffectMount(output);
};

ObjectEffectMount.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectEffectMount(input);
};

ObjectEffectMount.prototype.serializeAs_ObjectEffectMount = function(param1) {
    this.serializeAs_ObjectEffect(param1);
    if (this.mountId < 0) {
        throw new Error("Forbidden value (" + this.mountId + ") on element mountId.");
    } else {
        param1.writeInt(this.mountId);
        if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.date + ") on element date.");
        } else {
            param1.writeDouble(this.date);
            if (this.modelId < 0) {
                throw new Error("Forbidden value (" + this.modelId + ") on element modelId.");
            } else {
                param1.writeVarShort(this.modelId);
                return;
            }
        }
    }
};

ObjectEffectMount.prototype.deserializeAs_ObjectEffectMount = function(param1) {
    this.deserializeAs_ObjectEffect(param1);
    this.mountId = param1.readInt();
    if (this.mountId < 0) {
        throw new Error("Forbidden value (" + this.mountId + ") on element of ObjectEffectMount.mountId.");
    } else {
        this.date = param1.readDouble();
        if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.date + ") on element of ObjectEffectMount.date.");
        } else {
            this.modelId = param1.readVarUhShort();
            if (this.modelId < 0) {
                throw new Error("Forbidden value (" + this.modelId + ") on element of ObjectEffectMount.modelId.");
            } else {
                return;
            }
        }
    }
};

ObjectEffectMount.prototype.getTypeId = function() {
    return 179;
};

ObjectEffectMount.prototype.getClassName = function() {
    return 'ObjectEffectMount';
};

module.exports.id = 179;
module.exports.ObjectEffectMount = ObjectEffectMount;