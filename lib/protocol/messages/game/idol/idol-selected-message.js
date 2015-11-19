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
var IdolSelectedMessage = (function (_super) {
    __extends(IdolSelectedMessage, _super);
    function IdolSelectedMessage() {
        this.idolId = 0;
        this.activate = false;
        this.party = false;
        _super.call(this);
    }
    IdolSelectedMessage.prototype.getMessageId = function () {
        return IdolSelectedMessage.ID;
    };
    IdolSelectedMessage.prototype.reset = function () {
        this.idolId = 0;
        this.activate = false;
        this.party = false;
    };
    IdolSelectedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolSelectedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolSelectedMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolSelectedMessage(param1);
    };
    IdolSelectedMessage.prototype.serializeAs_IdolSelectedMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.activate);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.party);
        param1.writeByte(_loc2_);
        if (this.idolId < 0) {
            throw new Error('Forbidden value (' + this.idolId + ') on element idolId.');
        }
        param1.writeVarShort(this.idolId);
    };
    IdolSelectedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolSelectedMessage(param1);
    };
    IdolSelectedMessage.prototype.deserializeAs_IdolSelectedMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.activate = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.party = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.idolId = param1.readVarUhShort();
        if (this.idolId < 0) {
            throw new Error('Forbidden value (' + this.idolId + ') on element of IdolSelectedMessage.idolId.');
        }
    };
    IdolSelectedMessage.ID = 6581;
    return IdolSelectedMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolSelectedMessage;
