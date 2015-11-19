/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectItemMinimalInformation = require('./object-item-minimal-information');
var ObjectItemInformationWithQuantity = (function (_super) {
    __extends(ObjectItemInformationWithQuantity, _super);
    function ObjectItemInformationWithQuantity() {
        this.quantity = 0;
        _super.call(this);
    }
    ObjectItemInformationWithQuantity.prototype.getTypeId = function () {
        return ObjectItemInformationWithQuantity.ID;
    };
    ObjectItemInformationWithQuantity.prototype.reset = function () {
        this.quantity = 0;
    };
    ObjectItemInformationWithQuantity.prototype.serialize = function (param1) {
        this.serializeAs_ObjectItemInformationWithQuantity(param1);
    };
    ObjectItemInformationWithQuantity.prototype.serializeAs_ObjectItemInformationWithQuantity = function (param1) {
        _super.prototype.serializeAs_ObjectItemMinimalInformation.call(this, param1);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ObjectItemInformationWithQuantity.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectItemInformationWithQuantity(param1);
    };
    ObjectItemInformationWithQuantity.prototype.deserializeAs_ObjectItemInformationWithQuantity = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemInformationWithQuantity.quantity.');
        }
    };
    ObjectItemInformationWithQuantity.ID = 387;
    return ObjectItemInformationWithQuantity;
})(ObjectItemMinimalInformation);
module.exports = ObjectItemInformationWithQuantity;
