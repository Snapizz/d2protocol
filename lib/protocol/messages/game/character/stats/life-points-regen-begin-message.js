/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LifePointsRegenBeginMessage = (function (_super) {
    __extends(LifePointsRegenBeginMessage, _super);
    function LifePointsRegenBeginMessage() {
        this.regenRate = 0;
        _super.call(this);
    }
    LifePointsRegenBeginMessage.prototype.getMessageId = function () {
        return LifePointsRegenBeginMessage.ID;
    };
    LifePointsRegenBeginMessage.prototype.reset = function () {
        this.regenRate = 0;
    };
    LifePointsRegenBeginMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LifePointsRegenBeginMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LifePointsRegenBeginMessage.prototype.serialize = function (param1) {
        this.serializeAs_LifePointsRegenBeginMessage(param1);
    };
    LifePointsRegenBeginMessage.prototype.serializeAs_LifePointsRegenBeginMessage = function (param1) {
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element regenRate.');
        }
        param1.writeByte(this.regenRate);
    };
    LifePointsRegenBeginMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LifePointsRegenBeginMessage(param1);
    };
    LifePointsRegenBeginMessage.prototype.deserializeAs_LifePointsRegenBeginMessage = function (param1) {
        this.regenRate = param1.readUnsignedByte();
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element of LifePointsRegenBeginMessage.regenRate.');
        }
    };
    LifePointsRegenBeginMessage.ID = 5684;
    return LifePointsRegenBeginMessage;
})(network_message_1.NetworkMessage);
module.exports = LifePointsRegenBeginMessage;
