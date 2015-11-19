/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ClientUIOpenedMessage = require('./client-u-i-opened-message');
var ClientUIOpenedByObjectMessage = (function (_super) {
    __extends(ClientUIOpenedByObjectMessage, _super);
    function ClientUIOpenedByObjectMessage() {
        this.uid = 0;
        _super.call(this);
    }
    ClientUIOpenedByObjectMessage.prototype.getMessageId = function () {
        return ClientUIOpenedByObjectMessage.ID;
    };
    ClientUIOpenedByObjectMessage.prototype.reset = function () {
        this.uid = 0;
    };
    ClientUIOpenedByObjectMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ClientUIOpenedByObjectMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ClientUIOpenedByObjectMessage.prototype.serialize = function (param1) {
        this.serializeAs_ClientUIOpenedByObjectMessage(param1);
    };
    ClientUIOpenedByObjectMessage.prototype.serializeAs_ClientUIOpenedByObjectMessage = function (param1) {
        _super.prototype.serializeAs_ClientUIOpenedMessage.call(this, param1);
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeVarInt(this.uid);
    };
    ClientUIOpenedByObjectMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ClientUIOpenedByObjectMessage(param1);
    };
    ClientUIOpenedByObjectMessage.prototype.deserializeAs_ClientUIOpenedByObjectMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.uid = param1.readVarUhInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of ClientUIOpenedByObjectMessage.uid.');
        }
    };
    ClientUIOpenedByObjectMessage.ID = 6463;
    return ClientUIOpenedByObjectMessage;
})(ClientUIOpenedMessage);
module.exports = ClientUIOpenedByObjectMessage;
