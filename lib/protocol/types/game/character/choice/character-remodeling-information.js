/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractCharacterInformation = require('./../abstract-character-information');
var CharacterRemodelingInformation = (function (_super) {
    __extends(CharacterRemodelingInformation, _super);
    function CharacterRemodelingInformation() {
        this.name = '';
        this.breed = 0;
        this.sex = false;
        this.cosmeticId = 0;
        this.colors = [];
        _super.call(this);
    }
    CharacterRemodelingInformation.prototype.getTypeId = function () {
        return CharacterRemodelingInformation.ID;
    };
    CharacterRemodelingInformation.prototype.reset = function () {
        this.name = '';
        this.breed = 0;
        this.sex = false;
        this.cosmeticId = 0;
        this.colors = [];
    };
    CharacterRemodelingInformation.prototype.serialize = function (param1) {
        this.serializeAs_CharacterRemodelingInformation(param1);
    };
    CharacterRemodelingInformation.prototype.serializeAs_CharacterRemodelingInformation = function (param1) {
        _super.prototype.serializeAs_AbstractCharacterInformation.call(this, param1);
        param1.writeUTF(this.name);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
        }
        param1.writeVarShort(this.cosmeticId);
        param1.writeShort(this.colors.length);
        var _loc2_ = 0;
        while (_loc2_ < this.colors.length) {
            param1.writeInt(this.colors[_loc2_]);
            _loc2_++;
        }
    };
    CharacterRemodelingInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterRemodelingInformation(param1);
    };
    CharacterRemodelingInformation.prototype.deserializeAs_CharacterRemodelingInformation = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        this.name = param1.readUTF();
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();
        this.cosmeticId = param1.readVarUhShort();
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element of CharacterRemodelingInformation.cosmeticId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.colors.push(_loc4_);
            _loc3_++;
        }
    };
    CharacterRemodelingInformation.ID = 479;
    return CharacterRemodelingInformation;
})(AbstractCharacterInformation);
module.exports = CharacterRemodelingInformation;
