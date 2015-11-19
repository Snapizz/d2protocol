/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ServerSettingsMessage = (function (_super) {
    __extends(ServerSettingsMessage, _super);
    function ServerSettingsMessage() {
        this.lang = '';
        this.community = 0;
        this.gameType = -1;
        _super.call(this);
    }
    ServerSettingsMessage.prototype.getMessageId = function () {
        return ServerSettingsMessage.ID;
    };
    ServerSettingsMessage.prototype.reset = function () {
        this.lang = '';
        this.community = 0;
        this.gameType = -1;
    };
    ServerSettingsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ServerSettingsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ServerSettingsMessage.prototype.serialize = function (param1) {
        this.serializeAs_ServerSettingsMessage(param1);
    };
    ServerSettingsMessage.prototype.serializeAs_ServerSettingsMessage = function (param1) {
        param1.writeUTF(this.lang);
        if (this.community < 0) {
            throw new Error('Forbidden value (' + this.community + ') on element community.');
        }
        param1.writeByte(this.community);
        param1.writeByte(this.gameType);
    };
    ServerSettingsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ServerSettingsMessage(param1);
    };
    ServerSettingsMessage.prototype.deserializeAs_ServerSettingsMessage = function (param1) {
        this.lang = param1.readUTF();
        this.community = param1.readByte();
        if (this.community < 0) {
            throw new Error('Forbidden value (' + this.community + ') on element of ServerSettingsMessage.community.');
        }
        this.gameType = param1.readByte();
    };
    ServerSettingsMessage.ID = 6340;
    return ServerSettingsMessage;
})(network_message_1.NetworkMessage);
module.exports = ServerSettingsMessage;
