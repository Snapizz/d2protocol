/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var UpdateMountBoost = require('../../../../types/game/mount/update-mount-boost');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var UpdateMountBoostMessage = (function (_super) {
    __extends(UpdateMountBoostMessage, _super);
    function UpdateMountBoostMessage() {
        this.rideId = 0;
        this.boostToUpdateList = [];
        _super.call(this);
    }
    UpdateMountBoostMessage.prototype.getMessageId = function () {
        return UpdateMountBoostMessage.ID;
    };
    UpdateMountBoostMessage.prototype.reset = function () {
        this.rideId = 0;
        this.boostToUpdateList = [];
    };
    UpdateMountBoostMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    UpdateMountBoostMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    UpdateMountBoostMessage.prototype.serialize = function (param1) {
        this.serializeAs_UpdateMountBoostMessage(param1);
    };
    UpdateMountBoostMessage.prototype.serializeAs_UpdateMountBoostMessage = function (param1) {
        param1.writeVarInt(this.rideId);
        param1.writeShort(this.boostToUpdateList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.boostToUpdateList.length) {
            param1.writeShort((this.boostToUpdateList[_loc2_]).getTypeId());
            (this.boostToUpdateList[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    UpdateMountBoostMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_UpdateMountBoostMessage(param1);
    };
    UpdateMountBoostMessage.prototype.deserializeAs_UpdateMountBoostMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        this.rideId = param1.readVarInt();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(UpdateMountBoost, _loc4_);
            _loc5_.deserialize(param1);
            this.boostToUpdateList.push(_loc5_);
            _loc3_++;
        }
    };
    UpdateMountBoostMessage.ID = 6179;
    return UpdateMountBoostMessage;
})(network_message_1.NetworkMessage);
module.exports = UpdateMountBoostMessage;
