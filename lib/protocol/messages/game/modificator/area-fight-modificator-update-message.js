/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AreaFightModificatorUpdateMessage = (function (_super) {
    __extends(AreaFightModificatorUpdateMessage, _super);
    function AreaFightModificatorUpdateMessage() {
        this.spellPairId = 0;
        _super.call(this);
    }
    AreaFightModificatorUpdateMessage.prototype.getMessageId = function () {
        return AreaFightModificatorUpdateMessage.ID;
    };
    AreaFightModificatorUpdateMessage.prototype.reset = function () {
        this.spellPairId = 0;
    };
    AreaFightModificatorUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AreaFightModificatorUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AreaFightModificatorUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_AreaFightModificatorUpdateMessage(param1);
    };
    AreaFightModificatorUpdateMessage.prototype.serializeAs_AreaFightModificatorUpdateMessage = function (param1) {
        param1.writeInt(this.spellPairId);
    };
    AreaFightModificatorUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AreaFightModificatorUpdateMessage(param1);
    };
    AreaFightModificatorUpdateMessage.prototype.deserializeAs_AreaFightModificatorUpdateMessage = function (param1) {
        this.spellPairId = param1.readInt();
    };
    AreaFightModificatorUpdateMessage.ID = 6493;
    return AreaFightModificatorUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = AreaFightModificatorUpdateMessage;
