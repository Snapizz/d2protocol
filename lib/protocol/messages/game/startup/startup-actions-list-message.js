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
var StartupActionsListMessage = (function (_super) {
    __extends(StartupActionsListMessage, _super);
    function StartupActionsListMessage() {
        this.actions = [];
        _super.call(this);
    }
    StartupActionsListMessage.prototype.getMessageId = function () {
        return StartupActionsListMessage.ID;
    };
    StartupActionsListMessage.prototype.reset = function () {
        this.actions = [];
    };
    StartupActionsListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StartupActionsListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StartupActionsListMessage.prototype.serialize = function (param1) {
        this.serializeAs_StartupActionsListMessage(param1);
    };
    StartupActionsListMessage.prototype.serializeAs_StartupActionsListMessage = function (param1) {
        param1.writeShort(this.actions.length);
        var _loc2_ = 0;
        while (_loc2_ < this.actions.length) {
            (this.actions[_loc2_]).serializeAs_StartupActionAddObject(param1);
            _loc2_++;
        }
    };
    StartupActionsListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StartupActionsListMessage(param1);
    };
    StartupActionsListMessage.prototype.deserializeAs_StartupActionsListMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new StartupActionAddObject();
            _loc4_.deserialize(param1);
            this.actions.push(_loc4_);
            _loc3_++;
        }
    };
    StartupActionsListMessage.ID = 1301;
    return StartupActionsListMessage;
})(network_message_1.NetworkMessage);
module.exports = StartupActionsListMessage;
