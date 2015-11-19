/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PartyUpdateLightMessage = require('./../party-update-light-message');
var PartyCompanionUpdateLightMessage = (function (_super) {
    __extends(PartyCompanionUpdateLightMessage, _super);
    function PartyCompanionUpdateLightMessage() {
        this.indexId = 0;
        _super.call(this);
    }
    PartyCompanionUpdateLightMessage.prototype.getMessageId = function () {
        return PartyCompanionUpdateLightMessage.ID;
    };
    PartyCompanionUpdateLightMessage.prototype.reset = function () {
        this.indexId = 0;
    };
    PartyCompanionUpdateLightMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyCompanionUpdateLightMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyCompanionUpdateLightMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyCompanionUpdateLightMessage(param1);
    };
    PartyCompanionUpdateLightMessage.prototype.serializeAs_PartyCompanionUpdateLightMessage = function (param1) {
        _super.prototype.serializeAs_PartyUpdateLightMessage.call(this, param1);
        if (this.indexId < 0) {
            throw new Error('Forbidden value (' + this.indexId + ') on element indexId.');
        }
        param1.writeByte(this.indexId);
    };
    PartyCompanionUpdateLightMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyCompanionUpdateLightMessage(param1);
    };
    PartyCompanionUpdateLightMessage.prototype.deserializeAs_PartyCompanionUpdateLightMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.indexId = param1.readByte();
        if (this.indexId < 0) {
            throw new Error('Forbidden value (' + this.indexId + ') on element of PartyCompanionUpdateLightMessage.indexId.');
        }
    };
    PartyCompanionUpdateLightMessage.ID = 6472;
    return PartyCompanionUpdateLightMessage;
})(PartyUpdateLightMessage);
module.exports = PartyCompanionUpdateLightMessage;
