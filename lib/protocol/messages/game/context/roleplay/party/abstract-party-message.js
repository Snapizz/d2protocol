/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractPartyMessage = (function (_super) {
    __extends(AbstractPartyMessage, _super);
    function AbstractPartyMessage() {
        this.partyId = 0;
        _super.call(this);
    }
    AbstractPartyMessage.prototype.getMessageId = function () {
        return AbstractPartyMessage.ID;
    };
    AbstractPartyMessage.prototype.reset = function () {
        this.partyId = 0;
    };
    AbstractPartyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AbstractPartyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AbstractPartyMessage.prototype.serialize = function (param1) {
        this.serializeAs_AbstractPartyMessage(param1);
    };
    AbstractPartyMessage.prototype.serializeAs_AbstractPartyMessage = function (param1) {
        if (this.partyId < 0) {
            throw new Error('Forbidden value (' + this.partyId + ') on element partyId.');
        }
        param1.writeVarInt(this.partyId);
    };
    AbstractPartyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractPartyMessage(param1);
    };
    AbstractPartyMessage.prototype.deserializeAs_AbstractPartyMessage = function (param1) {
        this.partyId = param1.readVarUhInt();
        if (this.partyId < 0) {
            throw new Error('Forbidden value (' + this.partyId + ') on element of AbstractPartyMessage.partyId.');
        }
    };
    AbstractPartyMessage.ID = 6274;
    return AbstractPartyMessage;
})(network_message_1.NetworkMessage);
module.exports = AbstractPartyMessage;
