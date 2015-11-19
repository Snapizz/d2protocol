/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdolPartyLostMessage = (function (_super) {
    __extends(IdolPartyLostMessage, _super);
    function IdolPartyLostMessage() {
        this.idolId = 0;
        _super.call(this);
    }
    IdolPartyLostMessage.prototype.getMessageId = function () {
        return IdolPartyLostMessage.ID;
    };
    IdolPartyLostMessage.prototype.reset = function () {
        this.idolId = 0;
    };
    IdolPartyLostMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolPartyLostMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolPartyLostMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolPartyLostMessage(param1);
    };
    IdolPartyLostMessage.prototype.serializeAs_IdolPartyLostMessage = function (param1) {
        if (this.idolId < 0) {
            throw new Error('Forbidden value (' + this.idolId + ') on element idolId.');
        }
        param1.writeVarShort(this.idolId);
    };
    IdolPartyLostMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolPartyLostMessage(param1);
    };
    IdolPartyLostMessage.prototype.deserializeAs_IdolPartyLostMessage = function (param1) {
        this.idolId = param1.readVarUhShort();
        if (this.idolId < 0) {
            throw new Error('Forbidden value (' + this.idolId + ') on element of IdolPartyLostMessage.idolId.');
        }
    };
    IdolPartyLostMessage.ID = 6580;
    return IdolPartyLostMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolPartyLostMessage;
