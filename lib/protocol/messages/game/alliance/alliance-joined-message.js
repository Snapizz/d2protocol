/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceInformations = require('../../../types/game/context/roleplay/alliance-informations');
var AllianceJoinedMessage = (function (_super) {
    __extends(AllianceJoinedMessage, _super);
    function AllianceJoinedMessage() {
        this.allianceInfo = new AllianceInformations();
        this.enabled = false;
        _super.call(this);
    }
    AllianceJoinedMessage.prototype.getMessageId = function () {
        return AllianceJoinedMessage.ID;
    };
    AllianceJoinedMessage.prototype.reset = function () {
        this.allianceInfo = new AllianceInformations();
        this.enabled = false;
    };
    AllianceJoinedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceJoinedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceJoinedMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceJoinedMessage(param1);
    };
    AllianceJoinedMessage.prototype.serializeAs_AllianceJoinedMessage = function (param1) {
        this.allianceInfo.serializeAs_AllianceInformations(param1);
        param1.writeBoolean(this.enabled);
    };
    AllianceJoinedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceJoinedMessage(param1);
    };
    AllianceJoinedMessage.prototype.deserializeAs_AllianceJoinedMessage = function (param1) {
        this.allianceInfo = new AllianceInformations();
        this.allianceInfo.deserialize(param1);
        this.enabled = param1.readBoolean();
    };
    AllianceJoinedMessage.ID = 6402;
    return AllianceJoinedMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceJoinedMessage;
