var FightDispellableEffectExtendedInformations = module.exports = function() {
    this.actionId = 0;
    this.sourceId = 0;
    this.effect = new AbstractFightDispellableEffect();

    return this;
};

FightDispellableEffectExtendedInformations.prototype.serialize = function(output) {
    this.serializeAs_FightDispellableEffectExtendedInformations(output);
};

FightDispellableEffectExtendedInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FightDispellableEffectExtendedInformations(input);
};

FightDispellableEffectExtendedInformations.prototype.serializeAs_FightDispellableEffectExtendedInformations = function(param1) {
    if (this.actionId < 0) {
        throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
    } else {
        param1.writeVarShort(this.actionId);
        param1.writeInt(this.sourceId);
        param1.writeShort(this.effect.getTypeId());
        this.effect.serialize(param1);
        return;
    }
};

FightDispellableEffectExtendedInformations.prototype.deserializeAs_FightDispellableEffectExtendedInformations = function(param1) {
    this.actionId = param1.readVarUhShort();
    if (this.actionId < 0) {
        throw new Error("Forbidden value (" + this.actionId + ") on element of FightDispellableEffectExtendedInformations.actionId.");
    } else {
        this.sourceId = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        this.effect = ProtocolTypeManager.getInstance(AbstractFightDispellableEffect, _loc2_);
        this.effect.deserialize(param1);
        return;
    }
};

FightDispellableEffectExtendedInformations.prototype.getTypeId = function() {
    return 208;
};

FightDispellableEffectExtendedInformations.prototype.getClassName = function() {
    return 'FightDispellableEffectExtendedInformations';
};

module.exports.id = 208;