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
var GameActionFightSlideMessage = (function (_super) {
    __extends(GameActionFightSlideMessage, _super);
    function GameActionFightSlideMessage() {
        this.targetId = 0;
        this.startCellId = 0;
        this.endCellId = 0;
        _super.call(this);
    }
    GameActionFightSlideMessage.prototype.getMessageId = function () {
        return GameActionFightSlideMessage.ID;
    };
    GameActionFightSlideMessage.prototype.reset = function () {
        this.targetId = 0;
        this.startCellId = 0;
        this.endCellId = 0;
    };
    GameActionFightSlideMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightSlideMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightSlideMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightSlideMessage(param1);
    };
    GameActionFightSlideMessage.prototype.serializeAs_GameActionFightSlideMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        if (this.startCellId < -1 || this.startCellId > 559) {
            throw new Error('Forbidden value (' + this.startCellId + ') on element startCellId.');
        }
        param1.writeShort(this.startCellId);
        if (this.endCellId < -1 || this.endCellId > 559) {
            throw new Error('Forbidden value (' + this.endCellId + ') on element endCellId.');
        }
        param1.writeShort(this.endCellId);
    };
    GameActionFightSlideMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightSlideMessage(param1);
    };
    GameActionFightSlideMessage.prototype.deserializeAs_GameActionFightSlideMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.startCellId = param1.readShort();
        if (this.startCellId < -1 || this.startCellId > 559) {
            throw new Error('Forbidden value (' + this.startCellId + ') on element of GameActionFightSlideMessage.startCellId.');
        }
        this.endCellId = param1.readShort();
        if (this.endCellId < -1 || this.endCellId > 559) {
            throw new Error('Forbidden value (' + this.endCellId + ') on element of GameActionFightSlideMessage.endCellId.');
        }
    };
    GameActionFightSlideMessage.ID = 5525;
    return GameActionFightSlideMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightSlideMessage;
