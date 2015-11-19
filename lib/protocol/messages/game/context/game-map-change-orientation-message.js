/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ActorOrientation = require('../../../types/game/context/actor-orientation');
var GameMapChangeOrientationMessage = (function (_super) {
    __extends(GameMapChangeOrientationMessage, _super);
    function GameMapChangeOrientationMessage() {
        this.orientation = new ActorOrientation();
        _super.call(this);
    }
    GameMapChangeOrientationMessage.prototype.getMessageId = function () {
        return GameMapChangeOrientationMessage.ID;
    };
    GameMapChangeOrientationMessage.prototype.reset = function () {
        this.orientation = new ActorOrientation();
    };
    GameMapChangeOrientationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameMapChangeOrientationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameMapChangeOrientationMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameMapChangeOrientationMessage(param1);
    };
    GameMapChangeOrientationMessage.prototype.serializeAs_GameMapChangeOrientationMessage = function (param1) {
        this.orientation.serializeAs_ActorOrientation(param1);
    };
    GameMapChangeOrientationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameMapChangeOrientationMessage(param1);
    };
    GameMapChangeOrientationMessage.prototype.deserializeAs_GameMapChangeOrientationMessage = function (param1) {
        this.orientation = new ActorOrientation();
        this.orientation.deserialize(param1);
    };
    GameMapChangeOrientationMessage.ID = 946;
    return GameMapChangeOrientationMessage;
})(network_message_1.NetworkMessage);
module.exports = GameMapChangeOrientationMessage;
