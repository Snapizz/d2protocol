/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectItem = require('../../../../types/game/data/items/object-item');
var ObjectModifiedMessage = (function (_super) {
    __extends(ObjectModifiedMessage, _super);
    function ObjectModifiedMessage() {
        this.object = new ObjectItem();
        _super.call(this);
    }
    ObjectModifiedMessage.prototype.getMessageId = function () {
        return ObjectModifiedMessage.ID;
    };
    ObjectModifiedMessage.prototype.reset = function () {
        this.object = new ObjectItem();
    };
    ObjectModifiedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectModifiedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectModifiedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectModifiedMessage(param1);
    };
    ObjectModifiedMessage.prototype.serializeAs_ObjectModifiedMessage = function (param1) {
        this.object.serializeAs_ObjectItem(param1);
    };
    ObjectModifiedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectModifiedMessage(param1);
    };
    ObjectModifiedMessage.prototype.deserializeAs_ObjectModifiedMessage = function (param1) {
        this.object = new ObjectItem();
        this.object.deserialize(param1);
    };
    ObjectModifiedMessage.ID = 3029;
    return ObjectModifiedMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectModifiedMessage;
