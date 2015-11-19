/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Item = require('./item');
var ObjectEffect = require('./effects/object-effect');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var ObjectItemToSell = (function (_super) {
    __extends(ObjectItemToSell, _super);
    function ObjectItemToSell() {
        this.objectGID = 0;
        this.effects = [];
        this.objectUID = 0;
        this.quantity = 0;
        this.objectPrice = 0;
        _super.call(this);
    }
    ObjectItemToSell.prototype.getTypeId = function () {
        return ObjectItemToSell.ID;
    };
    ObjectItemToSell.prototype.reset = function () {
        this.objectGID = 0;
        this.effects = [];
        this.objectUID = 0;
        this.quantity = 0;
        this.objectPrice = 0;
    };
    ObjectItemToSell.prototype.serialize = function (param1) {
        this.serializeAs_ObjectItemToSell(param1);
    };
    ObjectItemToSell.prototype.serializeAs_ObjectItemToSell = function (param1) {
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
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
        if (this.objectPrice < 0) {
            throw new Error('Forbidden value (' + this.objectPrice + ') on element objectPrice.');
        }
        param1.writeVarInt(this.objectPrice);
    };
    ObjectItemToSell.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectItemToSell(param1);
    };
    ObjectItemToSell.prototype.deserializeAs_ObjectItemToSell = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemToSell.objectGID.');
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
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectItemToSell.objectUID.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemToSell.quantity.');
        }
        this.objectPrice = param1.readVarUhInt();
        if (this.objectPrice < 0) {
            throw new Error('Forbidden value (' + this.objectPrice + ') on element of ObjectItemToSell.objectPrice.');
        }
    };
    ObjectItemToSell.ID = 120;
    return ObjectItemToSell;
})(Item);
module.exports = ObjectItemToSell;
