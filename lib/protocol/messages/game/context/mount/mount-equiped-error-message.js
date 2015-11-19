/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountEquipedErrorMessage = (function (_super) {
    __extends(MountEquipedErrorMessage, _super);
    function MountEquipedErrorMessage() {
        this.errorType = 0;
        _super.call(this);
    }
    MountEquipedErrorMessage.prototype.getMessageId = function () {
        return MountEquipedErrorMessage.ID;
    };
    MountEquipedErrorMessage.prototype.reset = function () {
        this.errorType = 0;
    };
    MountEquipedErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountEquipedErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountEquipedErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountEquipedErrorMessage(param1);
    };
    MountEquipedErrorMessage.prototype.serializeAs_MountEquipedErrorMessage = function (param1) {
        param1.writeByte(this.errorType);
    };
    MountEquipedErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountEquipedErrorMessage(param1);
    };
    MountEquipedErrorMessage.prototype.deserializeAs_MountEquipedErrorMessage = function (param1) {
        this.errorType = param1.readByte();
        if (this.errorType < 0) {
            throw new Error('Forbidden value (' + this.errorType + ') on element of MountEquipedErrorMessage.errorType.');
        }
    };
    MountEquipedErrorMessage.ID = 5963;
    return MountEquipedErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = MountEquipedErrorMessage;
