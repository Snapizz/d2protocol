/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EntityLook = require('../../../types/game/look/entity-look');
var GameContextRefreshEntityLookMessage = (function (_super) {
    __extends(GameContextRefreshEntityLookMessage, _super);
    function GameContextRefreshEntityLookMessage() {
        this.id = 0;
        this.look = new EntityLook();
        _super.call(this);
    }
    GameContextRefreshEntityLookMessage.prototype.getMessageId = function () {
        return GameContextRefreshEntityLookMessage.ID;
    };
    GameContextRefreshEntityLookMessage.prototype.reset = function () {
        this.id = 0;
        this.look = new EntityLook();
    };
    GameContextRefreshEntityLookMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextRefreshEntityLookMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextRefreshEntityLookMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextRefreshEntityLookMessage(param1);
    };
    GameContextRefreshEntityLookMessage.prototype.serializeAs_GameContextRefreshEntityLookMessage = function (param1) {
        param1.writeInt(this.id);
        this.look.serializeAs_EntityLook(param1);
    };
    GameContextRefreshEntityLookMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextRefreshEntityLookMessage(param1);
    };
    GameContextRefreshEntityLookMessage.prototype.deserializeAs_GameContextRefreshEntityLookMessage = function (param1) {
        this.id = param1.readInt();
        this.look = new EntityLook();
        this.look.deserialize(param1);
    };
    GameContextRefreshEntityLookMessage.ID = 5637;
    return GameContextRefreshEntityLookMessage;
})(network_message_1.NetworkMessage);
module.exports = GameContextRefreshEntityLookMessage;
