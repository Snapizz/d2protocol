/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeCraftCountModifiedMessage = (function (_super) {
    __extends(ExchangeCraftCountModifiedMessage, _super);
    function ExchangeCraftCountModifiedMessage() {
        this.count = 0;
        _super.call(this);
    }
    ExchangeCraftCountModifiedMessage.prototype.getMessageId = function () {
        return ExchangeCraftCountModifiedMessage.ID;
    };
    ExchangeCraftCountModifiedMessage.prototype.reset = function () {
        this.count = 0;
    };
    ExchangeCraftCountModifiedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeCraftCountModifiedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeCraftCountModifiedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeCraftCountModifiedMessage(param1);
    };
    ExchangeCraftCountModifiedMessage.prototype.serializeAs_ExchangeCraftCountModifiedMessage = function (param1) {
        param1.writeVarInt(this.count);
    };
    ExchangeCraftCountModifiedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeCraftCountModifiedMessage(param1);
    };
    ExchangeCraftCountModifiedMessage.prototype.deserializeAs_ExchangeCraftCountModifiedMessage = function (param1) {
        this.count = param1.readVarInt();
    };
    ExchangeCraftCountModifiedMessage.ID = 6595;
    return ExchangeCraftCountModifiedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeCraftCountModifiedMessage;
