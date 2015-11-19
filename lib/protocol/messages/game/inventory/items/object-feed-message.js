/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectFeedMessage = (function (_super) {
    __extends(ObjectFeedMessage, _super);
    function ObjectFeedMessage() {
        this.objectUID = 0;
        this.foodUID = 0;
        this.foodQuantity = 0;
        _super.call(this);
    }
    ObjectFeedMessage.prototype.getMessageId = function () {
        return ObjectFeedMessage.ID;
    };
    ObjectFeedMessage.prototype.reset = function () {
        this.objectUID = 0;
        this.foodUID = 0;
        this.foodQuantity = 0;
    };
    ObjectFeedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectFeedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectFeedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectFeedMessage(param1);
    };
    ObjectFeedMessage.prototype.serializeAs_ObjectFeedMessage = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        if (this.foodUID < 0) {
            throw new Error('Forbidden value (' + this.foodUID + ') on element foodUID.');
        }
        param1.writeVarInt(this.foodUID);
        if (this.foodQuantity < 0) {
            throw new Error('Forbidden value (' + this.foodQuantity + ') on element foodQuantity.');
        }
        param1.writeVarInt(this.foodQuantity);
    };
    ObjectFeedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectFeedMessage(param1);
    };
    ObjectFeedMessage.prototype.deserializeAs_ObjectFeedMessage = function (param1) {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectFeedMessage.objectUID.');
        }
        this.foodUID = param1.readVarUhInt();
        if (this.foodUID < 0) {
            throw new Error('Forbidden value (' + this.foodUID + ') on element of ObjectFeedMessage.foodUID.');
        }
        this.foodQuantity = param1.readVarUhInt();
        if (this.foodQuantity < 0) {
            throw new Error('Forbidden value (' + this.foodQuantity + ') on element of ObjectFeedMessage.foodQuantity.');
        }
    };
    ObjectFeedMessage.ID = 6290;
    return ObjectFeedMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectFeedMessage;
