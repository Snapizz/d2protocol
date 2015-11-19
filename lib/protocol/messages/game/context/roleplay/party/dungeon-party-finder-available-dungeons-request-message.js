/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DungeonPartyFinderAvailableDungeonsRequestMessage = (function (_super) {
    __extends(DungeonPartyFinderAvailableDungeonsRequestMessage, _super);
    function DungeonPartyFinderAvailableDungeonsRequestMessage() {
        _super.call(this);
    }
    DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.getMessageId = function () {
        return DungeonPartyFinderAvailableDungeonsRequestMessage.ID;
    };
    DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.reset = function () {
    };
    DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(param1);
    };
    DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage = function (param1) {
    };
    DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(param1);
    };
    DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage = function (param1) {
    };
    DungeonPartyFinderAvailableDungeonsRequestMessage.ID = 6240;
    return DungeonPartyFinderAvailableDungeonsRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = DungeonPartyFinderAvailableDungeonsRequestMessage;
