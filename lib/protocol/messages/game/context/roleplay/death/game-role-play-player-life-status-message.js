/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayPlayerLifeStatusMessage = (function (_super) {
    __extends(GameRolePlayPlayerLifeStatusMessage, _super);
    function GameRolePlayPlayerLifeStatusMessage() {
        this.state = 0;
        _super.call(this);
    }
    GameRolePlayPlayerLifeStatusMessage.prototype.getMessageId = function () {
        return GameRolePlayPlayerLifeStatusMessage.ID;
    };
    GameRolePlayPlayerLifeStatusMessage.prototype.reset = function () {
        this.state = 0;
    };
    GameRolePlayPlayerLifeStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayPlayerLifeStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayPlayerLifeStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayPlayerLifeStatusMessage(param1);
    };
    GameRolePlayPlayerLifeStatusMessage.prototype.serializeAs_GameRolePlayPlayerLifeStatusMessage = function (param1) {
        param1.writeByte(this.state);
    };
    GameRolePlayPlayerLifeStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayPlayerLifeStatusMessage(param1);
    };
    GameRolePlayPlayerLifeStatusMessage.prototype.deserializeAs_GameRolePlayPlayerLifeStatusMessage = function (param1) {
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of GameRolePlayPlayerLifeStatusMessage.state.');
        }
    };
    GameRolePlayPlayerLifeStatusMessage.ID = 5996;
    return GameRolePlayPlayerLifeStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayPlayerLifeStatusMessage;
