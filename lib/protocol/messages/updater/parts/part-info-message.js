/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ContentPart = require('../../../types/updater/content-part');
var PartInfoMessage = (function (_super) {
    __extends(PartInfoMessage, _super);
    function PartInfoMessage() {
        this.part = new ContentPart();
        this.installationPercent = 0;
        _super.call(this);
    }
    PartInfoMessage.prototype.getMessageId = function () {
        return PartInfoMessage.ID;
    };
    PartInfoMessage.prototype.reset = function () {
        this.part = new ContentPart();
        this.installationPercent = 0;
    };
    PartInfoMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartInfoMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartInfoMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartInfoMessage(param1);
    };
    PartInfoMessage.prototype.serializeAs_PartInfoMessage = function (param1) {
        this.part.serializeAs_ContentPart(param1);
        param1.writeFloat(this.installationPercent);
    };
    PartInfoMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartInfoMessage(param1);
    };
    PartInfoMessage.prototype.deserializeAs_PartInfoMessage = function (param1) {
        this.part = new ContentPart();
        this.part.deserialize(param1);
        this.installationPercent = param1.readFloat();
    };
    PartInfoMessage.ID = 1508;
    return PartInfoMessage;
})(network_message_1.NetworkMessage);
module.exports = PartInfoMessage;
