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
var MimicryObjectPreviewMessage = (function (_super) {
    __extends(MimicryObjectPreviewMessage, _super);
    function MimicryObjectPreviewMessage() {
        this.result = new ObjectItem();
        _super.call(this);
    }
    MimicryObjectPreviewMessage.prototype.getMessageId = function () {
        return MimicryObjectPreviewMessage.ID;
    };
    MimicryObjectPreviewMessage.prototype.reset = function () {
        this.result = new ObjectItem();
    };
    MimicryObjectPreviewMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MimicryObjectPreviewMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MimicryObjectPreviewMessage.prototype.serialize = function (param1) {
        this.serializeAs_MimicryObjectPreviewMessage(param1);
    };
    MimicryObjectPreviewMessage.prototype.serializeAs_MimicryObjectPreviewMessage = function (param1) {
        this.result.serializeAs_ObjectItem(param1);
    };
    MimicryObjectPreviewMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MimicryObjectPreviewMessage(param1);
    };
    MimicryObjectPreviewMessage.prototype.deserializeAs_MimicryObjectPreviewMessage = function (param1) {
        this.result = new ObjectItem();
        this.result.deserialize(param1);
    };
    MimicryObjectPreviewMessage.ID = 6458;
    return MimicryObjectPreviewMessage;
})(network_message_1.NetworkMessage);
module.exports = MimicryObjectPreviewMessage;
