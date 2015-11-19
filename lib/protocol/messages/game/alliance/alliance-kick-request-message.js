/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceKickRequestMessage = (function (_super) {
    __extends(AllianceKickRequestMessage, _super);
    function AllianceKickRequestMessage() {
        this.kickedId = 0;
        _super.call(this);
    }
    AllianceKickRequestMessage.prototype.getMessageId = function () {
        return AllianceKickRequestMessage.ID;
    };
    AllianceKickRequestMessage.prototype.reset = function () {
        this.kickedId = 0;
    };
    AllianceKickRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceKickRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceKickRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceKickRequestMessage(param1);
    };
    AllianceKickRequestMessage.prototype.serializeAs_AllianceKickRequestMessage = function (param1) {
        if (this.kickedId < 0) {
            throw new Error('Forbidden value (' + this.kickedId + ') on element kickedId.');
        }
        param1.writeVarInt(this.kickedId);
    };
    AllianceKickRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceKickRequestMessage(param1);
    };
    AllianceKickRequestMessage.prototype.deserializeAs_AllianceKickRequestMessage = function (param1) {
        this.kickedId = param1.readVarUhInt();
        if (this.kickedId < 0) {
            throw new Error('Forbidden value (' + this.kickedId + ') on element of AllianceKickRequestMessage.kickedId.');
        }
    };
    AllianceKickRequestMessage.ID = 6400;
    return AllianceKickRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceKickRequestMessage;
