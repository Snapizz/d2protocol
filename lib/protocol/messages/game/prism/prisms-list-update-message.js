/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismsListMessage = require('./prisms-list-message');
var PrismsListUpdateMessage = (function (_super) {
    __extends(PrismsListUpdateMessage, _super);
    function PrismsListUpdateMessage() {
        _super.call(this);
    }
    PrismsListUpdateMessage.prototype.getMessageId = function () {
        return PrismsListUpdateMessage.ID;
    };
    PrismsListUpdateMessage.prototype.reset = function () {
    };
    PrismsListUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismsListUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismsListUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismsListUpdateMessage(param1);
    };
    PrismsListUpdateMessage.prototype.serializeAs_PrismsListUpdateMessage = function (param1) {
        _super.prototype.serializeAs_PrismsListMessage.call(this, param1);
    };
    PrismsListUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismsListUpdateMessage(param1);
    };
    PrismsListUpdateMessage.prototype.deserializeAs_PrismsListUpdateMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    PrismsListUpdateMessage.ID = 6438;
    return PrismsListUpdateMessage;
})(PrismsListMessage);
module.exports = PrismsListUpdateMessage;
