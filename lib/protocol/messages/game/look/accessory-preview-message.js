/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EntityLook = require('../../../types/game/look/entity-look');
var AccessoryPreviewMessage = (function (_super) {
    __extends(AccessoryPreviewMessage, _super);
    function AccessoryPreviewMessage() {
        this.look = new EntityLook();
        _super.call(this);
    }
    AccessoryPreviewMessage.prototype.getMessageId = function () {
        return AccessoryPreviewMessage.ID;
    };
    AccessoryPreviewMessage.prototype.reset = function () {
        this.look = new EntityLook();
    };
    AccessoryPreviewMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AccessoryPreviewMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AccessoryPreviewMessage.prototype.serialize = function (param1) {
        this.serializeAs_AccessoryPreviewMessage(param1);
    };
    AccessoryPreviewMessage.prototype.serializeAs_AccessoryPreviewMessage = function (param1) {
        this.look.serializeAs_EntityLook(param1);
    };
    AccessoryPreviewMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AccessoryPreviewMessage(param1);
    };
    AccessoryPreviewMessage.prototype.deserializeAs_AccessoryPreviewMessage = function (param1) {
        this.look = new EntityLook();
        this.look.deserialize(param1);
    };
    AccessoryPreviewMessage.ID = 6517;
    return AccessoryPreviewMessage;
})(network_message_1.NetworkMessage);
module.exports = AccessoryPreviewMessage;
