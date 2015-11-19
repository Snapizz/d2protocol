/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdentifiedEntityDispositionInformations = require('../../../types/game/context/identified-entity-disposition-informations');
var GameEntitiesDispositionMessage = (function (_super) {
    __extends(GameEntitiesDispositionMessage, _super);
    function GameEntitiesDispositionMessage() {
        this.dispositions = [];
        _super.call(this);
    }
    GameEntitiesDispositionMessage.prototype.getMessageId = function () {
        return GameEntitiesDispositionMessage.ID;
    };
    GameEntitiesDispositionMessage.prototype.reset = function () {
        this.dispositions = [];
    };
    GameEntitiesDispositionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameEntitiesDispositionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameEntitiesDispositionMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameEntitiesDispositionMessage(param1);
    };
    GameEntitiesDispositionMessage.prototype.serializeAs_GameEntitiesDispositionMessage = function (param1) {
        param1.writeShort(this.dispositions.length);
        var _loc2_ = 0;
        while (_loc2_ < this.dispositions.length) {
            (this.dispositions[_loc2_]).serializeAs_IdentifiedEntityDispositionInformations(param1);
            _loc2_++;
        }
    };
    GameEntitiesDispositionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameEntitiesDispositionMessage(param1);
    };
    GameEntitiesDispositionMessage.prototype.deserializeAs_GameEntitiesDispositionMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new IdentifiedEntityDispositionInformations();
            _loc4_.deserialize(param1);
            this.dispositions.push(_loc4_);
            _loc3_++;
        }
    };
    GameEntitiesDispositionMessage.ID = 5696;
    return GameEntitiesDispositionMessage;
})(network_message_1.NetworkMessage);
module.exports = GameEntitiesDispositionMessage;
