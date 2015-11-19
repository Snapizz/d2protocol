/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BooleanByteWrapper = require('../../../boolean-byte-wrapper');
var IdolSelectRequestMessage = (function (_super) {
    __extends(IdolSelectRequestMessage, _super);
    function IdolSelectRequestMessage() {
        this.idolId = 0;
        this.activate = false;
        this.party = false;
        _super.call(this);
    }
    IdolSelectRequestMessage.prototype.getMessageId = function () {
        return IdolSelectRequestMessage.ID;
    };
    IdolSelectRequestMessage.prototype.reset = function () {
        this.idolId = 0;
        this.activate = false;
        this.party = false;
    };
    IdolSelectRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolSelectRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolSelectRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolSelectRequestMessage(param1);
    };
    IdolSelectRequestMessage.prototype.serializeAs_IdolSelectRequestMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.activate);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.party);
        param1.writeByte(_loc2_);
        if (this.idolId < 0) {
            throw new Error('Forbidden value (' + this.idolId + ') on element idolId.');
        }
        param1.writeVarShort(this.idolId);
    };
    IdolSelectRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolSelectRequestMessage(param1);
    };
    IdolSelectRequestMessage.prototype.deserializeAs_IdolSelectRequestMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.activate = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.party = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.idolId = param1.readVarUhShort();
        if (this.idolId < 0) {
            throw new Error('Forbidden value (' + this.idolId + ') on element of IdolSelectRequestMessage.idolId.');
        }
    };
    IdolSelectRequestMessage.ID = 6587;
    return IdolSelectRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolSelectRequestMessage;
