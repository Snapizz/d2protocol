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
var LockableStateUpdateHouseDoorMessage = (function (_super) {
    __extends(LockableStateUpdateHouseDoorMessage, _super);
    function LockableStateUpdateHouseDoorMessage() {
        this.houseId = 0;
        _super.call(this);
    }
    LockableStateUpdateHouseDoorMessage.prototype.getMessageId = function () {
        return LockableStateUpdateHouseDoorMessage.ID;
    };
    LockableStateUpdateHouseDoorMessage.prototype.reset = function () {
        this.houseId = 0;
    };
    LockableStateUpdateHouseDoorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LockableStateUpdateHouseDoorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LockableStateUpdateHouseDoorMessage.prototype.serialize = function (param1) {
        this.serializeAs_LockableStateUpdateHouseDoorMessage(param1);
    };
    LockableStateUpdateHouseDoorMessage.prototype.serializeAs_LockableStateUpdateHouseDoorMessage = function (param1) {
        _super.prototype.serializeAs_LockableStateUpdateAbstractMessage.call(this, param1);
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
    };
    LockableStateUpdateHouseDoorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LockableStateUpdateHouseDoorMessage(param1);
    };
    LockableStateUpdateHouseDoorMessage.prototype.deserializeAs_LockableStateUpdateHouseDoorMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of LockableStateUpdateHouseDoorMessage.houseId.');
        }
    };
    LockableStateUpdateHouseDoorMessage.ID = 5668;
    return LockableStateUpdateHouseDoorMessage;
})(LockableStateUpdateAbstractMessage);
module.exports = LockableStateUpdateHouseDoorMessage;
