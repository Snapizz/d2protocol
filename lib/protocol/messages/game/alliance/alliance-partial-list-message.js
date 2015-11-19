/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceListMessage = require('./alliance-list-message');
var AlliancePartialListMessage = (function (_super) {
    __extends(AlliancePartialListMessage, _super);
    function AlliancePartialListMessage() {
        _super.call(this);
    }
    AlliancePartialListMessage.prototype.getMessageId = function () {
        return AlliancePartialListMessage.ID;
    };
    AlliancePartialListMessage.prototype.reset = function () {
    };
    AlliancePartialListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AlliancePartialListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AlliancePartialListMessage.prototype.serialize = function (param1) {
        this.serializeAs_AlliancePartialListMessage(param1);
    };
    AlliancePartialListMessage.prototype.serializeAs_AlliancePartialListMessage = function (param1) {
        _super.prototype.serializeAs_AllianceListMessage.call(this, param1);
    };
    AlliancePartialListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AlliancePartialListMessage(param1);
    };
    AlliancePartialListMessage.prototype.deserializeAs_AlliancePartialListMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    AlliancePartialListMessage.ID = 6427;
    return AlliancePartialListMessage;
})(AllianceListMessage);
module.exports = AlliancePartialListMessage;
