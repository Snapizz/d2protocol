/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterReportMessage = (function (_super) {
    __extends(CharacterReportMessage, _super);
    function CharacterReportMessage() {
        this.reportedId = 0;
        this.reason = 0;
        _super.call(this);
    }
    CharacterReportMessage.prototype.getMessageId = function () {
        return CharacterReportMessage.ID;
    };
    CharacterReportMessage.prototype.reset = function () {
        this.reportedId = 0;
        this.reason = 0;
    };
    CharacterReportMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterReportMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterReportMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterReportMessage(param1);
    };
    CharacterReportMessage.prototype.serializeAs_CharacterReportMessage = function (param1) {
        if (this.reportedId < 0) {
            throw new Error('Forbidden value (' + this.reportedId + ') on element reportedId.');
        }
        param1.writeVarInt(this.reportedId);
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element reason.');
        }
        param1.writeByte(this.reason);
    };
    CharacterReportMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterReportMessage(param1);
    };
    CharacterReportMessage.prototype.deserializeAs_CharacterReportMessage = function (param1) {
        this.reportedId = param1.readVarUhInt();
        if (this.reportedId < 0) {
            throw new Error('Forbidden value (' + this.reportedId + ') on element of CharacterReportMessage.reportedId.');
        }
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of CharacterReportMessage.reason.');
        }
    };
    CharacterReportMessage.ID = 6079;
    return CharacterReportMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterReportMessage;
