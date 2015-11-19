/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameMapChangeOrientationRequestMessage = (function (_super) {
    __extends(GameMapChangeOrientationRequestMessage, _super);
    function GameMapChangeOrientationRequestMessage() {
        this.direction = 1;
        _super.call(this);
    }
    GameMapChangeOrientationRequestMessage.prototype.getMessageId = function () {
        return GameMapChangeOrientationRequestMessage.ID;
    };
    GameMapChangeOrientationRequestMessage.prototype.reset = function () {
        this.direction = 1;
    };
    GameMapChangeOrientationRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameMapChangeOrientationRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameMapChangeOrientationRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameMapChangeOrientationRequestMessage(param1);
    };
    GameMapChangeOrientationRequestMessage.prototype.serializeAs_GameMapChangeOrientationRequestMessage = function (param1) {
        param1.writeByte(this.direction);
    };
    GameMapChangeOrientationRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameMapChangeOrientationRequestMessage(param1);
    };
    GameMapChangeOrientationRequestMessage.prototype.deserializeAs_GameMapChangeOrientationRequestMessage = function (param1) {
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of GameMapChangeOrientationRequestMessage.direction.');
        }
    };
    GameMapChangeOrientationRequestMessage.ID = 945;
    return GameMapChangeOrientationRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameMapChangeOrientationRequestMessage;
