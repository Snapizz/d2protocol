/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SpouseGetInformationsMessage = (function (_super) {
    __extends(SpouseGetInformationsMessage, _super);
    function SpouseGetInformationsMessage() {
        _super.call(this);
    }
    SpouseGetInformationsMessage.prototype.getMessageId = function () {
        return SpouseGetInformationsMessage.ID;
    };
    SpouseGetInformationsMessage.prototype.reset = function () {
    };
    SpouseGetInformationsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SpouseGetInformationsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SpouseGetInformationsMessage.prototype.serialize = function (param1) {
        this.serializeAs_SpouseGetInformationsMessage(param1);
    };
    SpouseGetInformationsMessage.prototype.serializeAs_SpouseGetInformationsMessage = function (param1) {
    };
    SpouseGetInformationsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SpouseGetInformationsMessage(param1);
    };
    SpouseGetInformationsMessage.prototype.deserializeAs_SpouseGetInformationsMessage = function (param1) {
    };
    SpouseGetInformationsMessage.ID = 6355;
    return SpouseGetInformationsMessage;
})(network_message_1.NetworkMessage);
module.exports = SpouseGetInformationsMessage;
