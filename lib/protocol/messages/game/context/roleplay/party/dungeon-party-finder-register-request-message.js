/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DungeonPartyFinderRegisterRequestMessage = (function (_super) {
    __extends(DungeonPartyFinderRegisterRequestMessage, _super);
    function DungeonPartyFinderRegisterRequestMessage() {
        this.dungeonIds = [];
        _super.call(this);
    }
    DungeonPartyFinderRegisterRequestMessage.prototype.getMessageId = function () {
        return DungeonPartyFinderRegisterRequestMessage.ID;
    };
    DungeonPartyFinderRegisterRequestMessage.prototype.reset = function () {
        this.dungeonIds = [];
    };
    DungeonPartyFinderRegisterRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DungeonPartyFinderRegisterRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DungeonPartyFinderRegisterRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_DungeonPartyFinderRegisterRequestMessage(param1);
    };
    DungeonPartyFinderRegisterRequestMessage.prototype.serializeAs_DungeonPartyFinderRegisterRequestMessage = function (param1) {
        param1.writeShort(this.dungeonIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.dungeonIds.length) {
            if (this.dungeonIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.dungeonIds[_loc2_] + ') on element 1 (starting at 1) of dungeonIds.');
            }
            param1.writeVarShort(this.dungeonIds[_loc2_]);
            _loc2_++;
        }
    };
    DungeonPartyFinderRegisterRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DungeonPartyFinderRegisterRequestMessage(param1);
    };
    DungeonPartyFinderRegisterRequestMessage.prototype.deserializeAs_DungeonPartyFinderRegisterRequestMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of dungeonIds.');
            }
            this.dungeonIds.push(_loc4_);
            _loc3_++;
        }
    };
    DungeonPartyFinderRegisterRequestMessage.ID = 6249;
    return DungeonPartyFinderRegisterRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = DungeonPartyFinderRegisterRequestMessage;
