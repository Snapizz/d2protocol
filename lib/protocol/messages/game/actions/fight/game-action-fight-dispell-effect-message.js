/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameActionFightDispellMessage = require('./game-action-fight-dispell-message');
var GameActionFightDispellEffectMessage = (function (_super) {
    __extends(GameActionFightDispellEffectMessage, _super);
    function GameActionFightDispellEffectMessage() {
        this.boostUID = 0;
        _super.call(this);
    }
    GameActionFightDispellEffectMessage.prototype.getMessageId = function () {
        return GameActionFightDispellEffectMessage.ID;
    };
    GameActionFightDispellEffectMessage.prototype.reset = function () {
        this.boostUID = 0;
    };
    GameActionFightDispellEffectMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightDispellEffectMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightDispellEffectMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightDispellEffectMessage(param1);
    };
    GameActionFightDispellEffectMessage.prototype.serializeAs_GameActionFightDispellEffectMessage = function (param1) {
        _super.prototype.serializeAs_GameActionFightDispellMessage.call(this, param1);
        if (this.boostUID < 0) {
            throw new Error('Forbidden value (' + this.boostUID + ') on element boostUID.');
        }
        param1.writeInt(this.boostUID);
    };
    GameActionFightDispellEffectMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightDispellEffectMessage(param1);
    };
    GameActionFightDispellEffectMessage.prototype.deserializeAs_GameActionFightDispellEffectMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.boostUID = param1.readInt();
        if (this.boostUID < 0) {
            throw new Error('Forbidden value (' + this.boostUID + ') on element of GameActionFightDispellEffectMessage.boostUID.');
        }
    };
    GameActionFightDispellEffectMessage.ID = 6113;
    return GameActionFightDispellEffectMessage;
})(GameActionFightDispellMessage);
module.exports = GameActionFightDispellEffectMessage;
