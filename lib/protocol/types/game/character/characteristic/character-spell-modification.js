/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var CharacterBaseCharacteristic = require('./character-base-characteristic');
var CharacterSpellModification = (function () {
    function CharacterSpellModification() {
        this.modificationType = 0;
        this.spellId = 0;
        this.value = new CharacterBaseCharacteristic();
    }
    CharacterSpellModification.prototype.getTypeId = function () {
        return CharacterSpellModification.ID;
    };
    CharacterSpellModification.prototype.reset = function () {
        this.modificationType = 0;
        this.spellId = 0;
        this.value = new CharacterBaseCharacteristic();
    };
    CharacterSpellModification.prototype.serialize = function (param1) {
        this.serializeAs_CharacterSpellModification(param1);
    };
    CharacterSpellModification.prototype.serializeAs_CharacterSpellModification = function (param1) {
        param1.writeByte(this.modificationType);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        this.value.serializeAs_CharacterBaseCharacteristic(param1);
    };
    CharacterSpellModification.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterSpellModification(param1);
    };
    CharacterSpellModification.prototype.deserializeAs_CharacterSpellModification = function (param1) {
        this.modificationType = param1.readByte();
        if (this.modificationType < 0) {
            throw new Error('Forbidden value (' + this.modificationType + ') on element of CharacterSpellModification.modificationType.');
        }
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of CharacterSpellModification.spellId.');
        }
        this.value = new CharacterBaseCharacteristic();
        this.value.deserialize(param1);
    };
    CharacterSpellModification.ID = 215;
    return CharacterSpellModification;
})();
module.exports = CharacterSpellModification;
