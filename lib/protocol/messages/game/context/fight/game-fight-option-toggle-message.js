/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightOptionToggleMessage = (function (_super) {
    __extends(GameFightOptionToggleMessage, _super);
    function GameFightOptionToggleMessage() {
        this.option = 3;
        _super.call(this);
    }
    GameFightOptionToggleMessage.prototype.getMessageId = function () {
        return GameFightOptionToggleMessage.ID;
    };
    GameFightOptionToggleMessage.prototype.reset = function () {
        this.option = 3;
    };
    GameFightOptionToggleMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightOptionToggleMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightOptionToggleMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightOptionToggleMessage(param1);
    };
    GameFightOptionToggleMessage.prototype.serializeAs_GameFightOptionToggleMessage = function (param1) {
        param1.writeByte(this.option);
    };
    GameFightOptionToggleMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightOptionToggleMessage(param1);
    };
    GameFightOptionToggleMessage.prototype.deserializeAs_GameFightOptionToggleMessage = function (param1) {
        this.option = param1.readByte();
        if (this.option < 0) {
            throw new Error('Forbidden value (' + this.option + ') on element of GameFightOptionToggleMessage.option.');
        }
    };
    GameFightOptionToggleMessage.ID = 707;
    return GameFightOptionToggleMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightOptionToggleMessage;
