/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Item = require('./item');
var ObjectEffect = require('./effects/object-effect');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var ObjectItemMinimalInformation = (function (_super) {
    __extends(ObjectItemMinimalInformation, _super);
    function ObjectItemMinimalInformation() {
        this.objectGID = 0;
        this.effects = [];
        _super.call(this);
    }
    ObjectItemMinimalInformation.prototype.getTypeId = function () {
        return ObjectItemMinimalInformation.ID;
    };
    ObjectItemMinimalInformation.prototype.reset = function () {
        this.objectGID = 0;
        this.effects = [];
    };
    ObjectItemMinimalInformation.prototype.serialize = function (param1) {
        this.serializeAs_ObjectItemMinimalInformation(param1);
    };
    ObjectItemMinimalInformation.prototype.serializeAs_ObjectItemMinimalInformation = function (param1) {
        _super.prototype.serializeAs_Item.call(this, param1);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);
        param1.writeShort(this.effects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.effects.length) {
            param1.writeShort((this.effects[_loc2_]).getTypeId());
            (this.effects[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    ObjectItemMinimalInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectItemMinimalInformation(param1);
    };
    ObjectItemMinimalInformation.prototype.deserializeAs_ObjectItemMinimalInformation = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemMinimalInformation.objectGID.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
            _loc5_.deserialize(param1);
            this.effects.push(_loc5_);
            _loc3_++;
        }
    };
    ObjectItemMinimalInformation.ID = 124;
    return ObjectItemMinimalInformation;
})(Item);
module.exports = ObjectItemMinimalInformation;
