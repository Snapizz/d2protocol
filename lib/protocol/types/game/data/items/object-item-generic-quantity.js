/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Item = require('./item');
var ObjectItemGenericQuantity = (function (_super) {
    __extends(ObjectItemGenericQuantity, _super);
    function ObjectItemGenericQuantity() {
        this.objectGID = 0;
        this.quantity = 0;
        _super.call(this);
    }
    ObjectItemGenericQuantity.prototype.getTypeId = function () {
        return ObjectItemGenericQuantity.ID;
    };
    ObjectItemGenericQuantity.prototype.reset = function () {
        this.objectGID = 0;
        this.quantity = 0;
    };
    ObjectItemGenericQuantity.prototype.serialize = function (param1) {
        this.serializeAs_ObjectItemGenericQuantity(param1);
    };
    ObjectItemGenericQuantity.prototype.serializeAs_ObjectItemGenericQuantity = function (param1) {
        _super.prototype.serializeAs_Item.call(this, param1);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ObjectItemGenericQuantity.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectItemGenericQuantity(param1);
    };
    ObjectItemGenericQuantity.prototype.deserializeAs_ObjectItemGenericQuantity = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemGenericQuantity.objectGID.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemGenericQuantity.quantity.');
        }
    };
    ObjectItemGenericQuantity.ID = 483;
    return ObjectItemGenericQuantity;
})(Item);
module.exports = ObjectItemGenericQuantity;
