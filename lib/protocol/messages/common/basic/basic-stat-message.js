/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicStatMessage = (function (_super) {
    __extends(BasicStatMessage, _super);
    function BasicStatMessage() {
        this.statId = 0;
        _super.call(this);
    }
    BasicStatMessage.prototype.getMessageId = function () {
        return BasicStatMessage.ID;
    };
    BasicStatMessage.prototype.reset = function () {
        this.statId = 0;
    };
    BasicStatMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicStatMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicStatMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicStatMessage(param1);
    };
    BasicStatMessage.prototype.serializeAs_BasicStatMessage = function (param1) {
        param1.writeVarShort(this.statId);
    };
    BasicStatMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicStatMessage(param1);
    };
    BasicStatMessage.prototype.deserializeAs_BasicStatMessage = function (param1) {
        this.statId = param1.readVarUhShort();
        if (this.statId < 0) {
            throw new Error('Forbidden value (' + this.statId + ') on element of BasicStatMessage.statId.');
        }
    };
    BasicStatMessage.ID = 6530;
    return BasicStatMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicStatMessage;
