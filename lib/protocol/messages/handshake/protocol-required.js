/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ProtocolRequired = (function (_super) {
    __extends(ProtocolRequired, _super);
    function ProtocolRequired() {
        this.requiredVersion = 0;
        this.currentVersion = 0;
        _super.call(this);
    }
    ProtocolRequired.prototype.getMessageId = function () {
        return ProtocolRequired.ID;
    };
    ProtocolRequired.prototype.reset = function () {
        this.requiredVersion = 0;
        this.currentVersion = 0;
    };
    ProtocolRequired.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ProtocolRequired.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ProtocolRequired.prototype.serialize = function (param1) {
        this.serializeAs_ProtocolRequired(param1);
    };
    ProtocolRequired.prototype.serializeAs_ProtocolRequired = function (param1) {
        if (this.requiredVersion < 0) {
            throw new Error('Forbidden value (' + this.requiredVersion + ') on element requiredVersion.');
        }
        param1.writeInt(this.requiredVersion);
        if (this.currentVersion < 0) {
            throw new Error('Forbidden value (' + this.currentVersion + ') on element currentVersion.');
        }
        param1.writeInt(this.currentVersion);
    };
    ProtocolRequired.prototype.deserialize = function (param1) {
        this.deserializeAs_ProtocolRequired(param1);
    };
    ProtocolRequired.prototype.deserializeAs_ProtocolRequired = function (param1) {
        this.requiredVersion = param1.readInt();
        if (this.requiredVersion < 0) {
            throw new Error('Forbidden value (' + this.requiredVersion + ') on element of ProtocolRequired.requiredVersion.');
        }
        this.currentVersion = param1.readInt();
        if (this.currentVersion < 0) {
            throw new Error('Forbidden value (' + this.currentVersion + ') on element of ProtocolRequired.currentVersion.');
        }
    };
    ProtocolRequired.ID = 1;
    return ProtocolRequired;
})(network_message_1.NetworkMessage);
module.exports = ProtocolRequired;
