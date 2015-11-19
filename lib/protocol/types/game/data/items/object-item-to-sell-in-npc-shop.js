/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectItemMinimalInformation = require('./object-item-minimal-information');
var ObjectItemToSellInNpcShop = (function (_super) {
    __extends(ObjectItemToSellInNpcShop, _super);
    function ObjectItemToSellInNpcShop() {
        this.objectPrice = 0;
        this.buyCriterion = '';
        _super.call(this);
    }
    ObjectItemToSellInNpcShop.prototype.getTypeId = function () {
        return ObjectItemToSellInNpcShop.ID;
    };
    ObjectItemToSellInNpcShop.prototype.reset = function () {
        this.objectPrice = 0;
        this.buyCriterion = '';
    };
    ObjectItemToSellInNpcShop.prototype.serialize = function (param1) {
        this.serializeAs_ObjectItemToSellInNpcShop(param1);
    };
    ObjectItemToSellInNpcShop.prototype.serializeAs_ObjectItemToSellInNpcShop = function (param1) {
        _super.prototype.serializeAs_ObjectItemMinimalInformation.call(this, param1);
        if (this.objectPrice < 0) {
            throw new Error('Forbidden value (' + this.objectPrice + ') on element objectPrice.');
        }
        param1.writeVarInt(this.objectPrice);
        param1.writeUTF(this.buyCriterion);
    };
    ObjectItemToSellInNpcShop.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectItemToSellInNpcShop(param1);
    };
    ObjectItemToSellInNpcShop.prototype.deserializeAs_ObjectItemToSellInNpcShop = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.objectPrice = param1.readVarUhInt();
        if (this.objectPrice < 0) {
            throw new Error('Forbidden value (' + this.objectPrice + ') on element of ObjectItemToSellInNpcShop.objectPrice.');
        }
        this.buyCriterion = param1.readUTF();
    };
    ObjectItemToSellInNpcShop.ID = 352;
    return ObjectItemToSellInNpcShop;
})(ObjectItemMinimalInformation);
module.exports = ObjectItemToSellInNpcShop;
