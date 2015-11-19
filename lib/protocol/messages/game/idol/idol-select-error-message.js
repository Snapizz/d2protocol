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
var IdolSelectErrorMessage = (function (_super) {
    __extends(IdolSelectErrorMessage, _super);
    function IdolSelectErrorMessage() {
        this.reason = 0;
        this.idolId = 0;
        this.activate = false;
        this.party = false;
        _super.call(this);
    }
    IdolSelectErrorMessage.prototype.getMessageId = function () {
        return IdolSelectErrorMessage.ID;
    };
    IdolSelectErrorMessage.prototype.reset = function () {
        this.reason = 0;
        this.idolId = 0;
        this.activate = false;
        this.party = false;
    };
    IdolSelectErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolSelectErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolSelectErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolSelectErrorMessage(param1);
    };
    IdolSelectErrorMessage.prototype.serializeAs_IdolSelectErrorMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.activate);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.party);
        param1.writeByte(_loc2_);
        param1.writeByte(this.reason);
        if (this.idolId < 0) {
            throw new Error('Forbidden value (' + this.idolId + ') on element idolId.');
        }
        param1.writeVarShort(this.idolId);
    };
    IdolSelectErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolSelectErrorMessage(param1);
    };
    IdolSelectErrorMessage.prototype.deserializeAs_IdolSelectErrorMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.activate = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.party = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of IdolSelectErrorMessage.reason.');
        }
        this.idolId = param1.readVarUhShort();
        if (this.idolId < 0) {
            throw new Error('Forbidden value (' + this.idolId + ') on element of IdolSelectErrorMessage.idolId.');
        }
    };
    IdolSelectErrorMessage.ID = 6584;
    return IdolSelectErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolSelectErrorMessage;
