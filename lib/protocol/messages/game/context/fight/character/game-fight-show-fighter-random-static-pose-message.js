/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightShowFighterMessage = require('./game-fight-show-fighter-message');
var GameFightShowFighterRandomStaticPoseMessage = (function (_super) {
    __extends(GameFightShowFighterRandomStaticPoseMessage, _super);
    function GameFightShowFighterRandomStaticPoseMessage() {
        _super.call(this);
    }
    GameFightShowFighterRandomStaticPoseMessage.prototype.getMessageId = function () {
        return GameFightShowFighterRandomStaticPoseMessage.ID;
    };
    GameFightShowFighterRandomStaticPoseMessage.prototype.reset = function () {
    };
    GameFightShowFighterRandomStaticPoseMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightShowFighterRandomStaticPoseMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightShowFighterRandomStaticPoseMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightShowFighterRandomStaticPoseMessage(param1);
    };
    GameFightShowFighterRandomStaticPoseMessage.prototype.serializeAs_GameFightShowFighterRandomStaticPoseMessage = function (param1) {
        _super.prototype.serializeAs_GameFightShowFighterMessage.call(this, param1);
    };
    GameFightShowFighterRandomStaticPoseMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightShowFighterRandomStaticPoseMessage(param1);
    };
    GameFightShowFighterRandomStaticPoseMessage.prototype.deserializeAs_GameFightShowFighterRandomStaticPoseMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    GameFightShowFighterRandomStaticPoseMessage.ID = 6218;
    return GameFightShowFighterRandomStaticPoseMessage;
})(GameFightShowFighterMessage);
module.exports = GameFightShowFighterRandomStaticPoseMessage;
