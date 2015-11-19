/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractCharacterInformation = require('./abstract-character-information');
var CharacterMinimalInformations = (function (_super) {
    __extends(CharacterMinimalInformations, _super);
    function CharacterMinimalInformations() {
        this.level = 0;
        this.name = '';
        _super.call(this);
    }
    CharacterMinimalInformations.prototype.getTypeId = function () {
        return CharacterMinimalInformations.ID;
    };
    CharacterMinimalInformations.prototype.reset = function () {
        this.level = 0;
        this.name = '';
    };
    CharacterMinimalInformations.prototype.serialize = function (param1) {
        this.serializeAs_CharacterMinimalInformations(param1);
    };
    CharacterMinimalInformations.prototype.serializeAs_CharacterMinimalInformations = function (param1) {
        _super.prototype.serializeAs_AbstractCharacterInformation.call(this, param1);
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        param1.writeUTF(this.name);
    };
    CharacterMinimalInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterMinimalInformations(param1);
    };
    CharacterMinimalInformations.prototype.deserializeAs_CharacterMinimalInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.level = param1.readUnsignedByte();
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of CharacterMinimalInformations.level.');
        }
        this.name = param1.readUTF();
    };
    CharacterMinimalInformations.ID = 110;
    return CharacterMinimalInformations;
})(AbstractCharacterInformation);
module.exports = CharacterMinimalInformations;
