/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TeleportBuddiesRequestedMessage = (function (_super) {
    __extends(TeleportBuddiesRequestedMessage, _super);
    function TeleportBuddiesRequestedMessage() {
        this.dungeonId = 0;
        this.inviterId = 0;
        this.invalidBuddiesIds = [];
        _super.call(this);
    }
    TeleportBuddiesRequestedMessage.prototype.getMessageId = function () {
        return TeleportBuddiesRequestedMessage.ID;
    };
    TeleportBuddiesRequestedMessage.prototype.reset = function () {
        this.dungeonId = 0;
        this.inviterId = 0;
        this.invalidBuddiesIds = [];
    };
    TeleportBuddiesRequestedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TeleportBuddiesRequestedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TeleportBuddiesRequestedMessage.prototype.serialize = function (param1) {
        this.serializeAs_TeleportBuddiesRequestedMessage(param1);
    };
    TeleportBuddiesRequestedMessage.prototype.serializeAs_TeleportBuddiesRequestedMessage = function (param1) {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        if (this.inviterId < 0) {
            throw new Error('Forbidden value (' + this.inviterId + ') on element inviterId.');
        }
        param1.writeVarInt(this.inviterId);
        param1.writeShort(this.invalidBuddiesIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.invalidBuddiesIds.length) {
            if (this.invalidBuddiesIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.invalidBuddiesIds[_loc2_] + ') on element 3 (starting at 1) of invalidBuddiesIds.');
            }
            param1.writeVarInt(this.invalidBuddiesIds[_loc2_]);
            _loc2_++;
        }
    };
    TeleportBuddiesRequestedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TeleportBuddiesRequestedMessage(param1);
    };
    TeleportBuddiesRequestedMessage.prototype.deserializeAs_TeleportBuddiesRequestedMessage = function (param1) {
        var _loc4_ = 0;
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of TeleportBuddiesRequestedMessage.dungeonId.');
        }
        this.inviterId = param1.readVarUhInt();
        if (this.inviterId < 0) {
            throw new Error('Forbidden value (' + this.inviterId + ') on element of TeleportBuddiesRequestedMessage.inviterId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of invalidBuddiesIds.');
            }
            this.invalidBuddiesIds.push(_loc4_);
            _loc3_++;
        }
    };
    TeleportBuddiesRequestedMessage.ID = 6302;
    return TeleportBuddiesRequestedMessage;
})(network_message_1.NetworkMessage);
module.exports = TeleportBuddiesRequestedMessage;
