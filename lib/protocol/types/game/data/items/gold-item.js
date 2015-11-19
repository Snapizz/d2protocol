/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Item = require('./item');
var GoldItem = (function (_super) {
    __extends(GoldItem, _super);
    function GoldItem() {
        this.sum = 0;
        _super.call(this);
    }
    GoldItem.prototype.getTypeId = function () {
        return GoldItem.ID;
    };
    GoldItem.prototype.reset = function () {
        this.sum = 0;
    };
    GoldItem.prototype.serialize = function (param1) {
        this.serializeAs_GoldItem(param1);
    };
    GoldItem.prototype.serializeAs_GoldItem = function (param1) {
        _super.prototype.serializeAs_Item.call(this, param1);
        if (this.sum < 0) {
            throw new Error('Forbidden value (' + this.sum + ') on element sum.');
        }
        param1.writeVarInt(this.sum);
    };
    GoldItem.prototype.deserialize = function (param1) {
        this.deserializeAs_GoldItem(param1);
    };
    GoldItem.prototype.deserializeAs_GoldItem = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.sum = param1.readVarUhInt();
        if (this.sum < 0) {
            throw new Error('Forbidden value (' + this.sum + ') on element of GoldItem.sum.');
        }
    };
    GoldItem.ID = 123;
    return GoldItem;
})(Item);
module.exports = GoldItem;
