/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractGameActionMessage = require('./../abstract-game-action-message');
var GameActionFightExchangePositionsMessage = (function (_super) {
    __extends(GameActionFightExchangePositionsMessage, _super);
    function GameActionFightExchangePositionsMessage() {
        this.targetId = 0;
        this.casterCellId = 0;
        this.targetCellId = 0;
        _super.call(this);
    }
    GameActionFightExchangePositionsMessage.prototype.getMessageId = function () {
        return GameActionFightExchangePositionsMessage.ID;
    };
    GameActionFightExchangePositionsMessage.prototype.reset = function () {
        this.targetId = 0;
        this.casterCellId = 0;
        this.targetCellId = 0;
    };
    GameActionFightExchangePositionsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightExchangePositionsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightExchangePositionsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightExchangePositionsMessage(param1);
    };
    GameActionFightExchangePositionsMessage.prototype.serializeAs_GameActionFightExchangePositionsMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        if (this.casterCellId < -1 || this.casterCellId > 559) {
            throw new Error('Forbidden value (' + this.casterCellId + ') on element casterCellId.');
        }
        param1.writeShort(this.casterCellId);
        if (this.targetCellId < -1 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element targetCellId.');
        }
        param1.writeShort(this.targetCellId);
    };
    GameActionFightExchangePositionsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightExchangePositionsMessage(param1);
    };
    GameActionFightExchangePositionsMessage.prototype.deserializeAs_GameActionFightExchangePositionsMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.casterCellId = param1.readShort();
        if (this.casterCellId < -1 || this.casterCellId > 559) {
            throw new Error('Forbidden value (' + this.casterCellId + ') on element of GameActionFightExchangePositionsMessage.casterCellId.');
        }
        this.targetCellId = param1.readShort();
        if (this.targetCellId < -1 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element of GameActionFightExchangePositionsMessage.targetCellId.');
        }
    };
    GameActionFightExchangePositionsMessage.ID = 5527;
    return GameActionFightExchangePositionsMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightExchangePositionsMessage;
