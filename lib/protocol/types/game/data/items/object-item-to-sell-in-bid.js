/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectItemToSell = require('./object-item-to-sell');
var ObjectItemToSellInBid = (function (_super) {
    __extends(ObjectItemToSellInBid, _super);
    function ObjectItemToSellInBid() {
        this.unsoldDelay = 0;
        _super.call(this);
    }
    ObjectItemToSellInBid.prototype.getTypeId = function () {
        return ObjectItemToSellInBid.ID;
    };
    ObjectItemToSellInBid.prototype.reset = function () {
        this.unsoldDelay = 0;
    };
    ObjectItemToSellInBid.prototype.serialize = function (param1) {
        this.serializeAs_ObjectItemToSellInBid(param1);
    };
    ObjectItemToSellInBid.prototype.serializeAs_ObjectItemToSellInBid = function (param1) {
        _super.prototype.serializeAs_ObjectItemToSell.call(this, param1);
        if (this.unsoldDelay < 0) {
            throw new Error('Forbidden value (' + this.unsoldDelay + ') on element unsoldDelay.');
        }
        param1.writeInt(this.unsoldDelay);
    };
    ObjectItemToSellInBid.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectItemToSellInBid(param1);
    };
    ObjectItemToSellInBid.prototype.deserializeAs_ObjectItemToSellInBid = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.unsoldDelay = param1.readInt();
        if (this.unsoldDelay < 0) {
            throw new Error('Forbidden value (' + this.unsoldDelay + ') on element of ObjectItemToSellInBid.unsoldDelay.');
        }
    };
    ObjectItemToSellInBid.ID = 164;
    return ObjectItemToSellInBid;
})(ObjectItemToSell);
module.exports = ObjectItemToSellInBid;
