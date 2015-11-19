/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdentificationSuccessMessage = require('./identification-success-message');
var IdentificationSuccessWithLoginTokenMessage = (function (_super) {
    __extends(IdentificationSuccessWithLoginTokenMessage, _super);
    function IdentificationSuccessWithLoginTokenMessage() {
        this.loginToken = '';
        _super.call(this);
    }
    IdentificationSuccessWithLoginTokenMessage.prototype.getMessageId = function () {
        return IdentificationSuccessWithLoginTokenMessage.ID;
    };
    IdentificationSuccessWithLoginTokenMessage.prototype.reset = function () {
        this.loginToken = '';
    };
    IdentificationSuccessWithLoginTokenMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdentificationSuccessWithLoginTokenMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdentificationSuccessWithLoginTokenMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdentificationSuccessWithLoginTokenMessage(param1);
    };
    IdentificationSuccessWithLoginTokenMessage.prototype.serializeAs_IdentificationSuccessWithLoginTokenMessage = function (param1) {
        _super.prototype.serializeAs_IdentificationSuccessMessage.call(this, param1);
        param1.writeUTF(this.loginToken);
    };
    IdentificationSuccessWithLoginTokenMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdentificationSuccessWithLoginTokenMessage(param1);
    };
    IdentificationSuccessWithLoginTokenMessage.prototype.deserializeAs_IdentificationSuccessWithLoginTokenMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.loginToken = param1.readUTF();
    };
    IdentificationSuccessWithLoginTokenMessage.ID = 6209;
    return IdentificationSuccessWithLoginTokenMessage;
})(IdentificationSuccessMessage);
module.exports = IdentificationSuccessWithLoginTokenMessage;
