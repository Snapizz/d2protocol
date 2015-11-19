/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightFighterInformations = require('../../../../types/game/context/fight/game-fight-fighter-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameFightSynchronizeMessage = (function (_super) {
    __extends(GameFightSynchronizeMessage, _super);
    function GameFightSynchronizeMessage() {
        this.fighters = [];
        _super.call(this);
    }
    GameFightSynchronizeMessage.prototype.getMessageId = function () {
        return GameFightSynchronizeMessage.ID;
    };
    GameFightSynchronizeMessage.prototype.reset = function () {
        this.fighters = [];
    };
    GameFightSynchronizeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightSynchronizeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightSynchronizeMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightSynchronizeMessage(param1);
    };
    GameFightSynchronizeMessage.prototype.serializeAs_GameFightSynchronizeMessage = function (param1) {
        param1.writeShort(this.fighters.length);
        var _loc2_ = 0;
        while (_loc2_ < this.fighters.length) {
            param1.writeShort((this.fighters[_loc2_]).getTypeId());
            (this.fighters[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    GameFightSynchronizeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightSynchronizeMessage(param1);
    };
    GameFightSynchronizeMessage.prototype.deserializeAs_GameFightSynchronizeMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(GameFightFighterInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.fighters.push(_loc5_);
            _loc3_++;
        }
    };
    GameFightSynchronizeMessage.ID = 5921;
    return GameFightSynchronizeMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightSynchronizeMessage;
