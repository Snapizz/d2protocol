/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var CharacterBaseCharacteristic = (function () {
    function CharacterBaseCharacteristic() {
        this.base = 0;
        this.additionnal = 0;
        this.objectsAndMountBonus = 0;
        this.alignGiftBonus = 0;
        this.contextModif = 0;
    }
    CharacterBaseCharacteristic.prototype.getTypeId = function () {
        return CharacterBaseCharacteristic.ID;
    };
    CharacterBaseCharacteristic.prototype.reset = function () {
        this.base = 0;
        this.additionnal = 0;
        this.objectsAndMountBonus = 0;
        this.alignGiftBonus = 0;
        this.contextModif = 0;
    };
    CharacterBaseCharacteristic.prototype.serialize = function (param1) {
        this.serializeAs_CharacterBaseCharacteristic(param1);
    };
    CharacterBaseCharacteristic.prototype.serializeAs_CharacterBaseCharacteristic = function (param1) {
        param1.writeVarShort(this.base);
        param1.writeVarShort(this.additionnal);
        param1.writeVarShort(this.objectsAndMountBonus);
        param1.writeVarShort(this.alignGiftBonus);
        param1.writeVarShort(this.contextModif);
    };
    CharacterBaseCharacteristic.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterBaseCharacteristic(param1);
    };
    CharacterBaseCharacteristic.prototype.deserializeAs_CharacterBaseCharacteristic = function (param1) {
        this.base = param1.readVarShort();
        this.additionnal = param1.readVarShort();
        this.objectsAndMountBonus = param1.readVarShort();
        this.alignGiftBonus = param1.readVarShort();
        this.contextModif = param1.readVarShort();
    };
    CharacterBaseCharacteristic.ID = 4;
    return CharacterBaseCharacteristic;
})();
module.exports = CharacterBaseCharacteristic;
