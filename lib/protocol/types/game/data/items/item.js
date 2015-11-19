/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var Item = (function () {
    function Item() {
    }
    Item.prototype.getTypeId = function () {
        return Item.ID;
    };
    Item.prototype.reset = function () {
    };
    Item.prototype.serialize = function (param1) {
        this.serializeAs_Item(param1);
    };
    Item.prototype.serializeAs_Item = function (param1) {
    };
    Item.prototype.deserialize = function (param1) {
        this.deserializeAs_Item(param1);
    };
    Item.prototype.deserializeAs_Item = function (param1) {
    };
    Item.ID = 7;
    return Item;
})();
module.exports = Item;
