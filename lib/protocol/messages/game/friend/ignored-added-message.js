/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IgnoredInformations = require('../../../types/game/friend/ignored-informations');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var IgnoredAddedMessage = (function (_super) {
    __extends(IgnoredAddedMessage, _super);
    function IgnoredAddedMessage() {
        this.ignoreAdded = new IgnoredInformations();
        this.session = false;
        _super.call(this);
    }
    IgnoredAddedMessage.prototype.getMessageId = function () {
        return IgnoredAddedMessage.ID;
    };
    IgnoredAddedMessage.prototype.reset = function () {
        this.ignoreAdded = new IgnoredInformations();
        this.session = false;
    };
    IgnoredAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IgnoredAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IgnoredAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_IgnoredAddedMessage(param1);
    };
    IgnoredAddedMessage.prototype.serializeAs_IgnoredAddedMessage = function (param1) {
        param1.writeShort(this.ignoreAdded.getTypeId());
        this.ignoreAdded.serialize(param1);
        param1.writeBoolean(this.session);
    };
    IgnoredAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IgnoredAddedMessage(param1);
    };
    IgnoredAddedMessage.prototype.deserializeAs_IgnoredAddedMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.ignoreAdded = ProtocolTypeManager.getInstance(IgnoredInformations, _loc2_);
        this.ignoreAdded.deserialize(param1);
        this.session = param1.readBoolean();
    };
    IgnoredAddedMessage.ID = 5678;
    return IgnoredAddedMessage;
})(network_message_1.NetworkMessage);
module.exports = IgnoredAddedMessage;
