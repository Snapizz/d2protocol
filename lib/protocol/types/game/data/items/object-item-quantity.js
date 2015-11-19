/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Item = require('./item');
var ObjectItemQuantity = (function (_super) {
    __extends(ObjectItemQuantity, _super);
    function ObjectItemQuantity() {
        this.objectUID = 0;
        this.quantity = 0;
        _super.call(this);
    }
    ObjectItemQuantity.prototype.getTypeId = function () {
        return ObjectItemQuantity.ID;
    };
    ObjectItemQuantity.prototype.reset = function () {
        this.objectUID = 0;
        this.quantity = 0;
    };
    ObjectItemQuantity.prototype.serialize = function (param1) {
        this.serializeAs_ObjectItemQuantity(param1);
    };
    ObjectItemQuantity.prototype.serializeAs_ObjectItemQuantity = function (param1) {
        _super.prototype.serializeAs_Item.call(this, param1);
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ObjectItemQuantity.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectItemQuantity(param1);
    };
    ObjectItemQuantity.prototype.deserializeAs_ObjectItemQuantity = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectItemQuantity.objectUID.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemQuantity.quantity.');
        }
    };
    ObjectItemQuantity.ID = 119;
    return ObjectItemQuantity;
})(Item);
module.exports = ObjectItemQuantity;
