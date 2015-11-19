/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var UpdateSelfAgressableStatusMessage = (function (_super) {
    __extends(UpdateSelfAgressableStatusMessage, _super);
    function UpdateSelfAgressableStatusMessage() {
        this.status = 0;
        this.probationTime = 0;
        _super.call(this);
    }
    UpdateSelfAgressableStatusMessage.prototype.getMessageId = function () {
        return UpdateSelfAgressableStatusMessage.ID;
    };
    UpdateSelfAgressableStatusMessage.prototype.reset = function () {
        this.status = 0;
        this.probationTime = 0;
    };
    UpdateSelfAgressableStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    UpdateSelfAgressableStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    UpdateSelfAgressableStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_UpdateSelfAgressableStatusMessage(param1);
    };
    UpdateSelfAgressableStatusMessage.prototype.serializeAs_UpdateSelfAgressableStatusMessage = function (param1) {
        param1.writeByte(this.status);
        if (this.probationTime < 0) {
            throw new Error('Forbidden value (' + this.probationTime + ') on element probationTime.');
        }
        param1.writeInt(this.probationTime);
    };
    UpdateSelfAgressableStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_UpdateSelfAgressableStatusMessage(param1);
    };
    UpdateSelfAgressableStatusMessage.prototype.deserializeAs_UpdateSelfAgressableStatusMessage = function (param1) {
        this.status = param1.readByte();
        if (this.status < 0) {
            throw new Error('Forbidden value (' + this.status + ') on element of UpdateSelfAgressableStatusMessage.status.');
        }
        this.probationTime = param1.readInt();
        if (this.probationTime < 0) {
            throw new Error('Forbidden value (' + this.probationTime + ') on element of UpdateSelfAgressableStatusMessage.probationTime.');
        }
    };
    UpdateSelfAgressableStatusMessage.ID = 6456;
    return UpdateSelfAgressableStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = UpdateSelfAgressableStatusMessage;
