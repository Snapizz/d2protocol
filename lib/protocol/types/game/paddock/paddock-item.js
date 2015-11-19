/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectItemInRolePlay = require('../context/roleplay/object-item-in-role-play');
var ItemDurability = require('../mount/item-durability');
var PaddockItem = (function (_super) {
    __extends(PaddockItem, _super);
    function PaddockItem() {
        this.durability = new ItemDurability();
        _super.call(this);
    }
    PaddockItem.prototype.getTypeId = function () {
        return PaddockItem.ID;
    };
    PaddockItem.prototype.reset = function () {
        this.durability = new ItemDurability();
    };
    PaddockItem.prototype.serialize = function (param1) {
        this.serializeAs_PaddockItem(param1);
    };
    PaddockItem.prototype.serializeAs_PaddockItem = function (param1) {
        _super.prototype.serializeAs_ObjectItemInRolePlay.call(this, param1);
        this.durability.serializeAs_ItemDurability(param1);
    };
    PaddockItem.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockItem(param1);
    };
    PaddockItem.prototype.deserializeAs_PaddockItem = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.durability = new ItemDurability();
        this.durability.deserialize(param1);
    };
    PaddockItem.ID = 185;
    return PaddockItem;
})(ObjectItemInRolePlay);
module.exports = PaddockItem;
