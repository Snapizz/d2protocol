/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightStartingMessage = (function (_super) {
    __extends(GameFightStartingMessage, _super);
    function GameFightStartingMessage() {
        this.fightType = 0;
        this.attackerId = 0;
        this.defenderId = 0;
        _super.call(this);
    }
    GameFightStartingMessage.prototype.getMessageId = function () {
        return GameFightStartingMessage.ID;
    };
    GameFightStartingMessage.prototype.reset = function () {
        this.fightType = 0;
        this.attackerId = 0;
        this.defenderId = 0;
    };
    GameFightStartingMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightStartingMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightStartingMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightStartingMessage(param1);
    };
    GameFightStartingMessage.prototype.serializeAs_GameFightStartingMessage = function (param1) {
        param1.writeByte(this.fightType);
        param1.writeInt(this.attackerId);
        param1.writeInt(this.defenderId);
    };
    GameFightStartingMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightStartingMessage(param1);
    };
    GameFightStartingMessage.prototype.deserializeAs_GameFightStartingMessage = function (param1) {
        this.fightType = param1.readByte();
        if (this.fightType < 0) {
            throw new Error('Forbidden value (' + this.fightType + ') on element of GameFightStartingMessage.fightType.');
        }
        this.attackerId = param1.readInt();
        this.defenderId = param1.readInt();
    };
    GameFightStartingMessage.ID = 700;
    return GameFightStartingMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightStartingMessage;
