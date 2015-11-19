/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountFeedRequestMessage = (function (_super) {
    __extends(MountFeedRequestMessage, _super);
    function MountFeedRequestMessage() {
        this.mountUid = 0;
        this.mountLocation = 0;
        this.mountFoodUid = 0;
        this.quantity = 0;
        _super.call(this);
    }
    MountFeedRequestMessage.prototype.getMessageId = function () {
        return MountFeedRequestMessage.ID;
    };
    MountFeedRequestMessage.prototype.reset = function () {
        this.mountUid = 0;
        this.mountLocation = 0;
        this.mountFoodUid = 0;
        this.quantity = 0;
    };
    MountFeedRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountFeedRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountFeedRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountFeedRequestMessage(param1);
    };
    MountFeedRequestMessage.prototype.serializeAs_MountFeedRequestMessage = function (param1) {
        if (this.mountUid < 0) {
            throw new Error('Forbidden value (' + this.mountUid + ') on element mountUid.');
        }
        param1.writeVarInt(this.mountUid);
        param1.writeByte(this.mountLocation);
        if (this.mountFoodUid < 0) {
            throw new Error('Forbidden value (' + this.mountFoodUid + ') on element mountFoodUid.');
        }
        param1.writeVarInt(this.mountFoodUid);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    MountFeedRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountFeedRequestMessage(param1);
    };
    MountFeedRequestMessage.prototype.deserializeAs_MountFeedRequestMessage = function (param1) {
        this.mountUid = param1.readVarUhInt();
        if (this.mountUid < 0) {
            throw new Error('Forbidden value (' + this.mountUid + ') on element of MountFeedRequestMessage.mountUid.');
        }
        this.mountLocation = param1.readByte();
        this.mountFoodUid = param1.readVarUhInt();
        if (this.mountFoodUid < 0) {
            throw new Error('Forbidden value (' + this.mountFoodUid + ') on element of MountFeedRequestMessage.mountFoodUid.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of MountFeedRequestMessage.quantity.');
        }
    };
    MountFeedRequestMessage.ID = 6189;
    return MountFeedRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MountFeedRequestMessage;
