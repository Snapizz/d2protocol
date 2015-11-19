/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var AbstractFightDispellableEffect = (function () {
    function AbstractFightDispellableEffect() {
        this.uid = 0;
        this.targetId = 0;
        this.turnDuration = 0;
        this.dispelable = 1;
        this.spellId = 0;
        this.effectId = 0;
        this.parentBoostUid = 0;
    }
    AbstractFightDispellableEffect.prototype.getTypeId = function () {
        return AbstractFightDispellableEffect.ID;
    };
    AbstractFightDispellableEffect.prototype.reset = function () {
        this.uid = 0;
        this.targetId = 0;
        this.turnDuration = 0;
        this.dispelable = 1;
        this.spellId = 0;
        this.effectId = 0;
        this.parentBoostUid = 0;
    };
    AbstractFightDispellableEffect.prototype.serialize = function (param1) {
        this.serializeAs_AbstractFightDispellableEffect(param1);
    };
    AbstractFightDispellableEffect.prototype.serializeAs_AbstractFightDispellableEffect = function (param1) {
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeVarInt(this.uid);
        param1.writeInt(this.targetId);
        param1.writeShort(this.turnDuration);
        param1.writeByte(this.dispelable);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        if (this.effectId < 0) {
            throw new Error('Forbidden value (' + this.effectId + ') on element effectId.');
        }
        param1.writeVarInt(this.effectId);
        if (this.parentBoostUid < 0) {
            throw new Error('Forbidden value (' + this.parentBoostUid + ') on element parentBoostUid.');
        }
        param1.writeVarInt(this.parentBoostUid);
    };
    AbstractFightDispellableEffect.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractFightDispellableEffect(param1);
    };
    AbstractFightDispellableEffect.prototype.deserializeAs_AbstractFightDispellableEffect = function (param1) {
        this.uid = param1.readVarUhInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of AbstractFightDispellableEffect.uid.');
        }
        this.targetId = param1.readInt();
        this.turnDuration = param1.readShort();
        this.dispelable = param1.readByte();
        if (this.dispelable < 0) {
            throw new Error('Forbidden value (' + this.dispelable + ') on element of AbstractFightDispellableEffect.dispelable.');
        }
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of AbstractFightDispellableEffect.spellId.');
        }
        this.effectId = param1.readVarUhInt();
        if (this.effectId < 0) {
            throw new Error('Forbidden value (' + this.effectId + ') on element of AbstractFightDispellableEffect.effectId.');
        }
        this.parentBoostUid = param1.readVarUhInt();
        if (this.parentBoostUid < 0) {
            throw new Error('Forbidden value (' + this.parentBoostUid + ') on element of AbstractFightDispellableEffect.parentBoostUid.');
        }
    };
    AbstractFightDispellableEffect.ID = 206;
    return AbstractFightDispellableEffect;
})();
module.exports = AbstractFightDispellableEffect;
