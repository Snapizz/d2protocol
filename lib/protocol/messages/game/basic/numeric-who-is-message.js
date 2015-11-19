/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NumericWhoIsMessage = (function (_super) {
    __extends(NumericWhoIsMessage, _super);
    function NumericWhoIsMessage() {
        this.playerId = 0;
        this.accountId = 0;
        _super.call(this);
    }
    NumericWhoIsMessage.prototype.getMessageId = function () {
        return NumericWhoIsMessage.ID;
    };
    NumericWhoIsMessage.prototype.reset = function () {
        this.playerId = 0;
        this.accountId = 0;
    };
    NumericWhoIsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NumericWhoIsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NumericWhoIsMessage.prototype.serialize = function (param1) {
        this.serializeAs_NumericWhoIsMessage(param1);
    };
    NumericWhoIsMessage.prototype.serializeAs_NumericWhoIsMessage = function (param1) {
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
    };
    NumericWhoIsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NumericWhoIsMessage(param1);
    };
    NumericWhoIsMessage.prototype.deserializeAs_NumericWhoIsMessage = function (param1) {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of NumericWhoIsMessage.playerId.');
        }
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of NumericWhoIsMessage.accountId.');
        }
    };
    NumericWhoIsMessage.ID = 6297;
    return NumericWhoIsMessage;
})(network_message_1.NetworkMessage);
module.exports = NumericWhoIsMessage;
