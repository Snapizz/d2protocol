/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockContentInformations = require('../../../types/game/paddock/paddock-content-informations');
var GuildPaddockBoughtMessage = (function (_super) {
    __extends(GuildPaddockBoughtMessage, _super);
    function GuildPaddockBoughtMessage() {
        this.paddockInfo = new PaddockContentInformations();
        _super.call(this);
    }
    GuildPaddockBoughtMessage.prototype.getMessageId = function () {
        return GuildPaddockBoughtMessage.ID;
    };
    GuildPaddockBoughtMessage.prototype.reset = function () {
        this.paddockInfo = new PaddockContentInformations();
    };
    GuildPaddockBoughtMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildPaddockBoughtMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildPaddockBoughtMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildPaddockBoughtMessage(param1);
    };
    GuildPaddockBoughtMessage.prototype.serializeAs_GuildPaddockBoughtMessage = function (param1) {
        this.paddockInfo.serializeAs_PaddockContentInformations(param1);
    };
    GuildPaddockBoughtMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildPaddockBoughtMessage(param1);
    };
    GuildPaddockBoughtMessage.prototype.deserializeAs_GuildPaddockBoughtMessage = function (param1) {
        this.paddockInfo = new PaddockContentInformations();
        this.paddockInfo.deserialize(param1);
    };
    GuildPaddockBoughtMessage.ID = 5952;
    return GuildPaddockBoughtMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildPaddockBoughtMessage;
