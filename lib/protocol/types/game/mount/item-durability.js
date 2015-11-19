/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ItemDurability = (function () {
    function ItemDurability() {
        this.durability = 0;
        this.durabilityMax = 0;
    }
    ItemDurability.prototype.getTypeId = function () {
        return ItemDurability.ID;
    };
    ItemDurability.prototype.reset = function () {
        this.durability = 0;
        this.durabilityMax = 0;
    };
    ItemDurability.prototype.serialize = function (param1) {
        this.serializeAs_ItemDurability(param1);
    };
    ItemDurability.prototype.serializeAs_ItemDurability = function (param1) {
        param1.writeShort(this.durability);
        param1.writeShort(this.durabilityMax);
    };
    ItemDurability.prototype.deserialize = function (param1) {
        this.deserializeAs_ItemDurability(param1);
    };
    ItemDurability.prototype.deserializeAs_ItemDurability = function (param1) {
        this.durability = param1.readShort();
        this.durabilityMax = param1.readShort();
    };
    ItemDurability.ID = 168;
    return ItemDurability;
})();
module.exports = ItemDurability;
