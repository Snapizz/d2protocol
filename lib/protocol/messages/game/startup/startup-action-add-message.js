/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var StartupActionAddObject = require('../../../types/game/startup/startup-action-add-object');
var StartupActionAddMessage = (function (_super) {
    __extends(StartupActionAddMessage, _super);
    function StartupActionAddMessage() {
        this.newAction = new StartupActionAddObject();
        _super.call(this);
    }
    StartupActionAddMessage.prototype.getMessageId = function () {
        return StartupActionAddMessage.ID;
    };
    StartupActionAddMessage.prototype.reset = function () {
        this.newAction = new StartupActionAddObject();
    };
    StartupActionAddMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StartupActionAddMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StartupActionAddMessage.prototype.serialize = function (param1) {
        this.serializeAs_StartupActionAddMessage(param1);
    };
    StartupActionAddMessage.prototype.serializeAs_StartupActionAddMessage = function (param1) {
        this.newAction.serializeAs_StartupActionAddObject(param1);
    };
    StartupActionAddMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StartupActionAddMessage(param1);
    };
    StartupActionAddMessage.prototype.deserializeAs_StartupActionAddMessage = function (param1) {
        this.newAction = new StartupActionAddObject();
        this.newAction.deserialize(param1);
    };
    StartupActionAddMessage.ID = 6538;
    return StartupActionAddMessage;
})(network_message_1.NetworkMessage);
module.exports = StartupActionAddMessage;
