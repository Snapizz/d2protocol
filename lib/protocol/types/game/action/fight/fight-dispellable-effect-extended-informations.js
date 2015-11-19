/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var AbstractFightDispellableEffect = require('../../actions/fight/abstract-fight-dispellable-effect');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var FightDispellableEffectExtendedInformations = (function () {
    function FightDispellableEffectExtendedInformations() {
        this.actionId = 0;
        this.sourceId = 0;
        this.effect = new AbstractFightDispellableEffect();
    }
    FightDispellableEffectExtendedInformations.prototype.getTypeId = function () {
        return FightDispellableEffectExtendedInformations.ID;
    };
    FightDispellableEffectExtendedInformations.prototype.reset = function () {
        this.actionId = 0;
        this.sourceId = 0;
        this.effect = new AbstractFightDispellableEffect();
    };
    FightDispellableEffectExtendedInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightDispellableEffectExtendedInformations(param1);
    };
    FightDispellableEffectExtendedInformations.prototype.serializeAs_FightDispellableEffectExtendedInformations = function (param1) {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeVarShort(this.actionId);
        param1.writeInt(this.sourceId);
        param1.writeShort(this.effect.getTypeId());
        this.effect.serialize(param1);
    };
    FightDispellableEffectExtendedInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightDispellableEffectExtendedInformations(param1);
    };
    FightDispellableEffectExtendedInformations.prototype.deserializeAs_FightDispellableEffectExtendedInformations = function (param1) {
        this.actionId = param1.readVarUhShort();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of FightDispellableEffectExtendedInformations.actionId.');
        }
        this.sourceId = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        this.effect = ProtocolTypeManager.getInstance(AbstractFightDispellableEffect, _loc2_);
        this.effect.deserialize(param1);
    };
    FightDispellableEffectExtendedInformations.ID = 208;
    return FightDispellableEffectExtendedInformations;
})();
module.exports = FightDispellableEffectExtendedInformations;
