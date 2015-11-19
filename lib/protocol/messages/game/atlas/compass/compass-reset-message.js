/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CompassResetMessage = (function (_super) {
    __extends(CompassResetMessage, _super);
    function CompassResetMessage() {
        this.type = 0;
        _super.call(this);
    }
    CompassResetMessage.prototype.getMessageId = function () {
        return CompassResetMessage.ID;
    };
    CompassResetMessage.prototype.reset = function () {
        this.type = 0;
    };
    CompassResetMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CompassResetMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CompassResetMessage.prototype.serialize = function (param1) {
        this.serializeAs_CompassResetMessage(param1);
    };
    CompassResetMessage.prototype.serializeAs_CompassResetMessage = function (param1) {
        param1.writeByte(this.type);
    };
    CompassResetMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CompassResetMessage(param1);
    };
    CompassResetMessage.prototype.deserializeAs_CompassResetMessage = function (param1) {
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of CompassResetMessage.type.');
        }
    };
    CompassResetMessage.ID = 5584;
    return CompassResetMessage;
})(network_message_1.NetworkMessage);
module.exports = CompassResetMessage;
