/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var Idol = require('../../../../types/game/idol/idol');
var GameFightStartMessage = (function (_super) {
    __extends(GameFightStartMessage, _super);
    function GameFightStartMessage() {
        this.idols = [];
        _super.call(this);
    }
    GameFightStartMessage.prototype.getMessageId = function () {
        return GameFightStartMessage.ID;
    };
    GameFightStartMessage.prototype.reset = function () {
        this.idols = [];
    };
    GameFightStartMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightStartMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightStartMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightStartMessage(param1);
    };
    GameFightStartMessage.prototype.serializeAs_GameFightStartMessage = function (param1) {
        param1.writeShort(this.idols.length);
        var _loc2_ = 0;
        while (_loc2_ < this.idols.length) {
            (this.idols[_loc2_]).serializeAs_Idol(param1);
            _loc2_++;
        }
    };
    GameFightStartMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightStartMessage(param1);
    };
    GameFightStartMessage.prototype.deserializeAs_GameFightStartMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new Idol();
            _loc4_.deserialize(param1);
            this.idols.push(_loc4_);
            _loc3_++;
        }
    };
    GameFightStartMessage.ID = 712;
    return GameFightStartMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightStartMessage;
