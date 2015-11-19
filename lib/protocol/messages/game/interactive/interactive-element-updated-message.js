/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InteractiveElement = require('../../../types/game/interactive/interactive-element');
var InteractiveElementUpdatedMessage = (function (_super) {
    __extends(InteractiveElementUpdatedMessage, _super);
    function InteractiveElementUpdatedMessage() {
        this.interactiveElement = new InteractiveElement();
        _super.call(this);
    }
    InteractiveElementUpdatedMessage.prototype.getMessageId = function () {
        return InteractiveElementUpdatedMessage.ID;
    };
    InteractiveElementUpdatedMessage.prototype.reset = function () {
        this.interactiveElement = new InteractiveElement();
    };
    InteractiveElementUpdatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InteractiveElementUpdatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InteractiveElementUpdatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_InteractiveElementUpdatedMessage(param1);
    };
    InteractiveElementUpdatedMessage.prototype.serializeAs_InteractiveElementUpdatedMessage = function (param1) {
        this.interactiveElement.serializeAs_InteractiveElement(param1);
    };
    InteractiveElementUpdatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InteractiveElementUpdatedMessage(param1);
    };
    InteractiveElementUpdatedMessage.prototype.deserializeAs_InteractiveElementUpdatedMessage = function (param1) {
        this.interactiveElement = new InteractiveElement();
        this.interactiveElement.deserialize(param1);
    };
    InteractiveElementUpdatedMessage.ID = 5708;
    return InteractiveElementUpdatedMessage;
})(network_message_1.NetworkMessage);
module.exports = InteractiveElementUpdatedMessage;
