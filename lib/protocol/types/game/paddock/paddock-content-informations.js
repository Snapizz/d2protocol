/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MountInformationsForPaddock = require('./mount-informations-for-paddock');
var PaddockInformations = require('./paddock-informations');
var PaddockContentInformations = (function (_super) {
    __extends(PaddockContentInformations, _super);
    function PaddockContentInformations() {
        this.paddockId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.abandonned = false;
        this.mountsInformations = [];
        _super.call(this);
    }
    PaddockContentInformations.prototype.getTypeId = function () {
        return PaddockContentInformations.ID;
    };
    PaddockContentInformations.prototype.reset = function () {
        this.paddockId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.abandonned = false;
        this.mountsInformations = [];
    };
    PaddockContentInformations.prototype.serialize = function (param1) {
        this.serializeAs_PaddockContentInformations(param1);
    };
    PaddockContentInformations.prototype.serializeAs_PaddockContentInformations = function (param1) {
        _super.prototype.serializeAs_PaddockInformations.call(this, param1);
        param1.writeInt(this.paddockId);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeBoolean(this.abandonned);
        param1.writeShort(this.mountsInformations.length);
        var _loc2_ = 0;
        while (_loc2_ < this.mountsInformations.length) {
            (this.mountsInformations[_loc2_]).serializeAs_MountInformationsForPaddock(param1);
            _loc2_++;
        }
    };
    PaddockContentInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockContentInformations(param1);
    };
    PaddockContentInformations.prototype.deserializeAs_PaddockContentInformations = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.paddockId = param1.readInt();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PaddockContentInformations.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PaddockContentInformations.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PaddockContentInformations.subAreaId.');
        }
        this.abandonned = param1.readBoolean();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new MountInformationsForPaddock();
            _loc4_.deserialize(param1);
            this.mountsInformations.push(_loc4_);
            _loc3_++;
        }
    };
    PaddockContentInformations.ID = 183;
    return PaddockContentInformations;
})(PaddockInformations);
module.exports = PaddockContentInformations;
