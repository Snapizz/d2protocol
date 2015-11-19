/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractCharacterInformation = require('./../abstract-character-information');
var AbstractCharacterToRefurbishInformation = (function (_super) {
    __extends(AbstractCharacterToRefurbishInformation, _super);
    function AbstractCharacterToRefurbishInformation() {
        this.colors = [];
        this.cosmeticId = 0;
        _super.call(this);
    }
    AbstractCharacterToRefurbishInformation.prototype.getTypeId = function () {
        return AbstractCharacterToRefurbishInformation.ID;
    };
    AbstractCharacterToRefurbishInformation.prototype.reset = function () {
        this.colors = [];
        this.cosmeticId = 0;
    };
    AbstractCharacterToRefurbishInformation.prototype.serialize = function (param1) {
        this.serializeAs_AbstractCharacterToRefurbishInformation(param1);
    };
    AbstractCharacterToRefurbishInformation.prototype.serializeAs_AbstractCharacterToRefurbishInformation = function (param1) {
        _super.prototype.serializeAs_AbstractCharacterInformation.call(this, param1);
        param1.writeShort(this.colors.length);
        var _loc2_ = 0;
        while (_loc2_ < this.colors.length) {
            param1.writeInt(this.colors[_loc2_]);
            _loc2_++;
        }
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
        }
        param1.writeVarInt(this.cosmeticId);
    };
    AbstractCharacterToRefurbishInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractCharacterToRefurbishInformation(param1);
    };
    AbstractCharacterToRefurbishInformation.prototype.deserializeAs_AbstractCharacterToRefurbishInformation = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.colors.push(_loc4_);
            _loc3_++;
        }
        this.cosmeticId = param1.readVarUhInt();
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element of AbstractCharacterToRefurbishInformation.cosmeticId.');
        }
    };
    AbstractCharacterToRefurbishInformation.ID = 475;
    return AbstractCharacterToRefurbishInformation;
})(AbstractCharacterInformation);
module.exports = AbstractCharacterToRefurbishInformation;
