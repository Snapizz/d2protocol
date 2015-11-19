/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LockableStateUpdateAbstractMessage = require('./lockable-state-update-abstract-message');
var LockableStateUpdateStorageMessage = (function (_super) {
    __extends(LockableStateUpdateStorageMessage, _super);
    function LockableStateUpdateStorageMessage() {
        this.mapId = 0;
        this.elementId = 0;
        _super.call(this);
    }
    LockableStateUpdateStorageMessage.prototype.getMessageId = function () {
        return LockableStateUpdateStorageMessage.ID;
    };
    LockableStateUpdateStorageMessage.prototype.reset = function () {
        this.mapId = 0;
        this.elementId = 0;
    };
    LockableStateUpdateStorageMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LockableStateUpdateStorageMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LockableStateUpdateStorageMessage.prototype.serialize = function (param1) {
        this.serializeAs_LockableStateUpdateStorageMessage(param1);
    };
    LockableStateUpdateStorageMessage.prototype.serializeAs_LockableStateUpdateStorageMessage = function (param1) {
        _super.prototype.serializeAs_LockableStateUpdateAbstractMessage.call(this, param1);
        param1.writeInt(this.mapId);
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element elementId.');
        }
        param1.writeVarInt(this.elementId);
    };
    LockableStateUpdateStorageMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LockableStateUpdateStorageMessage(param1);
    };
    LockableStateUpdateStorageMessage.prototype.deserializeAs_LockableStateUpdateStorageMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.mapId = param1.readInt();
        this.elementId = param1.readVarUhInt();
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element of LockableStateUpdateStorageMessage.elementId.');
        }
    };
    LockableStateUpdateStorageMessage.ID = 5669;
    return LockableStateUpdateStorageMessage;
})(LockableStateUpdateAbstractMessage);
module.exports = LockableStateUpdateStorageMessage;
