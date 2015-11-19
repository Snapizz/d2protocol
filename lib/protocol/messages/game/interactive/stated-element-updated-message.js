/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var StatedElement = require('../../../types/game/interactive/stated-element');
var StatedElementUpdatedMessage = (function (_super) {
    __extends(StatedElementUpdatedMessage, _super);
    function StatedElementUpdatedMessage() {
        this.statedElement = new StatedElement();
        _super.call(this);
    }
    StatedElementUpdatedMessage.prototype.getMessageId = function () {
        return StatedElementUpdatedMessage.ID;
    };
    StatedElementUpdatedMessage.prototype.reset = function () {
        this.statedElement = new StatedElement();
    };
    StatedElementUpdatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StatedElementUpdatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StatedElementUpdatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_StatedElementUpdatedMessage(param1);
    };
    StatedElementUpdatedMessage.prototype.serializeAs_StatedElementUpdatedMessage = function (param1) {
        this.statedElement.serializeAs_StatedElement(param1);
    };
    StatedElementUpdatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StatedElementUpdatedMessage(param1);
    };
    StatedElementUpdatedMessage.prototype.deserializeAs_StatedElementUpdatedMessage = function (param1) {
        this.statedElement = new StatedElement();
        this.statedElement.deserialize(param1);
    };
    StatedElementUpdatedMessage.ID = 5709;
    return StatedElementUpdatedMessage;
})(network_message_1.NetworkMessage);
module.exports = StatedElementUpdatedMessage;
