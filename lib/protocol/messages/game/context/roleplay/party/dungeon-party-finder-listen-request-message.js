/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DungeonPartyFinderListenRequestMessage = (function (_super) {
    __extends(DungeonPartyFinderListenRequestMessage, _super);
    function DungeonPartyFinderListenRequestMessage() {
        this.dungeonId = 0;
        _super.call(this);
    }
    DungeonPartyFinderListenRequestMessage.prototype.getMessageId = function () {
        return DungeonPartyFinderListenRequestMessage.ID;
    };
    DungeonPartyFinderListenRequestMessage.prototype.reset = function () {
        this.dungeonId = 0;
    };
    DungeonPartyFinderListenRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DungeonPartyFinderListenRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DungeonPartyFinderListenRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_DungeonPartyFinderListenRequestMessage(param1);
    };
    DungeonPartyFinderListenRequestMessage.prototype.serializeAs_DungeonPartyFinderListenRequestMessage = function (param1) {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
    };
    DungeonPartyFinderListenRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DungeonPartyFinderListenRequestMessage(param1);
    };
    DungeonPartyFinderListenRequestMessage.prototype.deserializeAs_DungeonPartyFinderListenRequestMessage = function (param1) {
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of DungeonPartyFinderListenRequestMessage.dungeonId.');
        }
    };
    DungeonPartyFinderListenRequestMessage.ID = 6246;
    return DungeonPartyFinderListenRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = DungeonPartyFinderListenRequestMessage;
