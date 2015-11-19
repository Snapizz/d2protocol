/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PrismInformation = require('./prism-information');
var ObjectItem = require('../data/items/object-item');
var AllianceInsiderPrismInformation = (function (_super) {
    __extends(AllianceInsiderPrismInformation, _super);
    function AllianceInsiderPrismInformation() {
        this.lastTimeSlotModificationDate = 0;
        this.lastTimeSlotModificationAuthorGuildId = 0;
        this.lastTimeSlotModificationAuthorId = 0;
        this.lastTimeSlotModificationAuthorName = '';
        this.modulesObjects = [];
        _super.call(this);
    }
    AllianceInsiderPrismInformation.prototype.getTypeId = function () {
        return AllianceInsiderPrismInformation.ID;
    };
    AllianceInsiderPrismInformation.prototype.reset = function () {
        this.lastTimeSlotModificationDate = 0;
        this.lastTimeSlotModificationAuthorGuildId = 0;
        this.lastTimeSlotModificationAuthorId = 0;
        this.lastTimeSlotModificationAuthorName = '';
        this.modulesObjects = [];
    };
    AllianceInsiderPrismInformation.prototype.serialize = function (param1) {
        this.serializeAs_AllianceInsiderPrismInformation(param1);
    };
    AllianceInsiderPrismInformation.prototype.serializeAs_AllianceInsiderPrismInformation = function (param1) {
        _super.prototype.serializeAs_PrismInformation.call(this, param1);
        if (this.lastTimeSlotModificationDate < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationDate + ') on element lastTimeSlotModificationDate.');
        }
        param1.writeInt(this.lastTimeSlotModificationDate);
        if (this.lastTimeSlotModificationAuthorGuildId < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorGuildId + ') on element lastTimeSlotModificationAuthorGuildId.');
        }
        param1.writeVarInt(this.lastTimeSlotModificationAuthorGuildId);
        if (this.lastTimeSlotModificationAuthorId < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorId + ') on element lastTimeSlotModificationAuthorId.');
        }
        param1.writeVarInt(this.lastTimeSlotModificationAuthorId);
        param1.writeUTF(this.lastTimeSlotModificationAuthorName);
        param1.writeShort(this.modulesObjects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.modulesObjects.length) {
            (this.modulesObjects[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }
    };
    AllianceInsiderPrismInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceInsiderPrismInformation(param1);
    };
    AllianceInsiderPrismInformation.prototype.deserializeAs_AllianceInsiderPrismInformation = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.lastTimeSlotModificationDate = param1.readInt();
        if (this.lastTimeSlotModificationDate < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationDate + ') on element of AllianceInsiderPrismInformation.lastTimeSlotModificationDate.');
        }
        this.lastTimeSlotModificationAuthorGuildId = param1.readVarUhInt();
        if (this.lastTimeSlotModificationAuthorGuildId < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorGuildId + ') on element of AllianceInsiderPrismInformation.lastTimeSlotModificationAuthorGuildId.');
        }
        this.lastTimeSlotModificationAuthorId = param1.readVarUhInt();
        if (this.lastTimeSlotModificationAuthorId < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorId + ') on element of AllianceInsiderPrismInformation.lastTimeSlotModificationAuthorId.');
        }
        this.lastTimeSlotModificationAuthorName = param1.readUTF();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.modulesObjects.push(_loc4_);
            _loc3_++;
        }
    };
    AllianceInsiderPrismInformation.ID = 431;
    return AllianceInsiderPrismInformation;
})(PrismInformation);
module.exports = AllianceInsiderPrismInformation;
