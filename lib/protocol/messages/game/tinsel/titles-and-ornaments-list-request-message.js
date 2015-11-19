/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TitlesAndOrnamentsListRequestMessage = (function (_super) {
    __extends(TitlesAndOrnamentsListRequestMessage, _super);
    function TitlesAndOrnamentsListRequestMessage() {
        _super.call(this);
    }
    TitlesAndOrnamentsListRequestMessage.prototype.getMessageId = function () {
        return TitlesAndOrnamentsListRequestMessage.ID;
    };
    TitlesAndOrnamentsListRequestMessage.prototype.reset = function () {
    };
    TitlesAndOrnamentsListRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TitlesAndOrnamentsListRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TitlesAndOrnamentsListRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_TitlesAndOrnamentsListRequestMessage(param1);
    };
    TitlesAndOrnamentsListRequestMessage.prototype.serializeAs_TitlesAndOrnamentsListRequestMessage = function (param1) {
    };
    TitlesAndOrnamentsListRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TitlesAndOrnamentsListRequestMessage(param1);
    };
    TitlesAndOrnamentsListRequestMessage.prototype.deserializeAs_TitlesAndOrnamentsListRequestMessage = function (param1) {
    };
    TitlesAndOrnamentsListRequestMessage.ID = 6363;
    return TitlesAndOrnamentsListRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = TitlesAndOrnamentsListRequestMessage;
