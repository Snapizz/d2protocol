/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractPartyMessage = require('./abstract-party-message');
var PartyCannotJoinErrorMessage = (function (_super) {
    __extends(PartyCannotJoinErrorMessage, _super);
    function PartyCannotJoinErrorMessage() {
        this.reason = 0;
        _super.call(this);
    }
    PartyCannotJoinErrorMessage.prototype.getMessageId = function () {
        return PartyCannotJoinErrorMessage.ID;
    };
    PartyCannotJoinErrorMessage.prototype.reset = function () {
        this.reason = 0;
    };
    PartyCannotJoinErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyCannotJoinErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyCannotJoinErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyCannotJoinErrorMessage(param1);
    };
    PartyCannotJoinErrorMessage.prototype.serializeAs_PartyCannotJoinErrorMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeByte(this.reason);
    };
    PartyCannotJoinErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyCannotJoinErrorMessage(param1);
    };
    PartyCannotJoinErrorMessage.prototype.deserializeAs_PartyCannotJoinErrorMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of PartyCannotJoinErrorMessage.reason.');
        }
    };
    PartyCannotJoinErrorMessage.ID = 5583;
    return PartyCannotJoinErrorMessage;
})(AbstractPartyMessage);
module.exports = PartyCannotJoinErrorMessage;
