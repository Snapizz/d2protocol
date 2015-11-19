/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ValidateSpellForgetMessage = (function (_super) {
    __extends(ValidateSpellForgetMessage, _super);
    function ValidateSpellForgetMessage() {
        this.spellId = 0;
        _super.call(this);
    }
    ValidateSpellForgetMessage.prototype.getMessageId = function () {
        return ValidateSpellForgetMessage.ID;
    };
    ValidateSpellForgetMessage.prototype.reset = function () {
        this.spellId = 0;
    };
    ValidateSpellForgetMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ValidateSpellForgetMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ValidateSpellForgetMessage.prototype.serialize = function (param1) {
        this.serializeAs_ValidateSpellForgetMessage(param1);
    };
    ValidateSpellForgetMessage.prototype.serializeAs_ValidateSpellForgetMessage = function (param1) {
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
    };
    ValidateSpellForgetMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ValidateSpellForgetMessage(param1);
    };
    ValidateSpellForgetMessage.prototype.deserializeAs_ValidateSpellForgetMessage = function (param1) {
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of ValidateSpellForgetMessage.spellId.');
        }
    };
    ValidateSpellForgetMessage.ID = 1700;
    return ValidateSpellForgetMessage;
})(network_message_1.NetworkMessage);
module.exports = ValidateSpellForgetMessage;
