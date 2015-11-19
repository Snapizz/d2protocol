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
var GameActionMark = require('../../../../types/game/actions/fight/game-action-mark');
var GameActionFightMarkCellsMessage = (function (_super) {
    __extends(GameActionFightMarkCellsMessage, _super);
    function GameActionFightMarkCellsMessage() {
        this.mark = new GameActionMark();
        _super.call(this);
    }
    GameActionFightMarkCellsMessage.prototype.getMessageId = function () {
        return GameActionFightMarkCellsMessage.ID;
    };
    GameActionFightMarkCellsMessage.prototype.reset = function () {
        this.mark = new GameActionMark();
    };
    GameActionFightMarkCellsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightMarkCellsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightMarkCellsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightMarkCellsMessage(param1);
    };
    GameActionFightMarkCellsMessage.prototype.serializeAs_GameActionFightMarkCellsMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        this.mark.serializeAs_GameActionMark(param1);
    };
    GameActionFightMarkCellsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightMarkCellsMessage(param1);
    };
    GameActionFightMarkCellsMessage.prototype.deserializeAs_GameActionFightMarkCellsMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.mark = new GameActionMark();
        this.mark.deserialize(param1);
    };
    GameActionFightMarkCellsMessage.ID = 5540;
    return GameActionFightMarkCellsMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightMarkCellsMessage;
