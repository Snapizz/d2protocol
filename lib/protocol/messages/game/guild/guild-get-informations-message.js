/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildGetInformationsMessage = (function (_super) {
    __extends(GuildGetInformationsMessage, _super);
    function GuildGetInformationsMessage() {
        this.infoType = 0;
        _super.call(this);
    }
    GuildGetInformationsMessage.prototype.getMessageId = function () {
        return GuildGetInformationsMessage.ID;
    };
    GuildGetInformationsMessage.prototype.reset = function () {
        this.infoType = 0;
    };
    GuildGetInformationsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildGetInformationsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildGetInformationsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildGetInformationsMessage(param1);
    };
    GuildGetInformationsMessage.prototype.serializeAs_GuildGetInformationsMessage = function (param1) {
        param1.writeByte(this.infoType);
    };
    GuildGetInformationsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildGetInformationsMessage(param1);
    };
    GuildGetInformationsMessage.prototype.deserializeAs_GuildGetInformationsMessage = function (param1) {
        this.infoType = param1.readByte();
        if (this.infoType < 0) {
            throw new Error('Forbidden value (' + this.infoType + ') on element of GuildGetInformationsMessage.infoType.');
        }
    };
    GuildGetInformationsMessage.ID = 5550;
    return GuildGetInformationsMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildGetInformationsMessage;
