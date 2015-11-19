/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CharacterBaseInformations = require('./character-base-informations');
var CharacterHardcoreOrEpicInformations = (function (_super) {
    __extends(CharacterHardcoreOrEpicInformations, _super);
    function CharacterHardcoreOrEpicInformations() {
        this.deathState = 0;
        this.deathCount = 0;
        this.deathMaxLevel = 0;
        _super.call(this);
    }
    CharacterHardcoreOrEpicInformations.prototype.getTypeId = function () {
        return CharacterHardcoreOrEpicInformations.ID;
    };
    CharacterHardcoreOrEpicInformations.prototype.reset = function () {
        this.deathState = 0;
        this.deathCount = 0;
        this.deathMaxLevel = 0;
    };
    CharacterHardcoreOrEpicInformations.prototype.serialize = function (param1) {
        this.serializeAs_CharacterHardcoreOrEpicInformations(param1);
    };
    CharacterHardcoreOrEpicInformations.prototype.serializeAs_CharacterHardcoreOrEpicInformations = function (param1) {
        _super.prototype.serializeAs_CharacterBaseInformations.call(this, param1);
        param1.writeByte(this.deathState);
        if (this.deathCount < 0) {
            throw new Error('Forbidden value (' + this.deathCount + ') on element deathCount.');
        }
        param1.writeVarShort(this.deathCount);
        if (this.deathMaxLevel < 1 || this.deathMaxLevel > 200) {
            throw new Error('Forbidden value (' + this.deathMaxLevel + ') on element deathMaxLevel.');
        }
        param1.writeByte(this.deathMaxLevel);
    };
    CharacterHardcoreOrEpicInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterHardcoreOrEpicInformations(param1);
    };
    CharacterHardcoreOrEpicInformations.prototype.deserializeAs_CharacterHardcoreOrEpicInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.deathState = param1.readByte();
        if (this.deathState < 0) {
            throw new Error('Forbidden value (' + this.deathState + ') on element of CharacterHardcoreOrEpicInformations.deathState.');
        }
        this.deathCount = param1.readVarUhShort();
        if (this.deathCount < 0) {
            throw new Error('Forbidden value (' + this.deathCount + ') on element of CharacterHardcoreOrEpicInformations.deathCount.');
        }
        this.deathMaxLevel = param1.readUnsignedByte();
        if (this.deathMaxLevel < 1 || this.deathMaxLevel > 200) {
            throw new Error('Forbidden value (' + this.deathMaxLevel + ') on element of CharacterHardcoreOrEpicInformations.deathMaxLevel.');
        }
    };
    CharacterHardcoreOrEpicInformations.ID = 474;
    return CharacterHardcoreOrEpicInformations;
})(CharacterBaseInformations);
module.exports = CharacterHardcoreOrEpicInformations;
