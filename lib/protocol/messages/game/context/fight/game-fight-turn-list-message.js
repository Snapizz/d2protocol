/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightTurnListMessage = (function (_super) {
    __extends(GameFightTurnListMessage, _super);
    function GameFightTurnListMessage() {
        this.ids = [];
        this.deadsIds = [];
        _super.call(this);
    }
    GameFightTurnListMessage.prototype.getMessageId = function () {
        return GameFightTurnListMessage.ID;
    };
    GameFightTurnListMessage.prototype.reset = function () {
        this.ids = [];
        this.deadsIds = [];
    };
    GameFightTurnListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightTurnListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightTurnListMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightTurnListMessage(param1);
    };
    GameFightTurnListMessage.prototype.serializeAs_GameFightTurnListMessage = function (param1) {
        param1.writeShort(this.ids.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ids.length) {
            param1.writeInt(this.ids[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.deadsIds.length);
        var _loc3_ = 0;
        while (_loc3_ < this.deadsIds.length) {
            param1.writeInt(this.deadsIds[_loc3_]);
            _loc3_++;
        }
    };
    GameFightTurnListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightTurnListMessage(param1);
    };
    GameFightTurnListMessage.prototype.deserializeAs_GameFightTurnListMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readInt();
            this.ids.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readInt();
            this.deadsIds.push(_loc7_);
            _loc5_++;
        }
    };
    GameFightTurnListMessage.ID = 713;
    return GameFightTurnListMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightTurnListMessage;
