/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractTaxCollectorListMessage = require('./abstract-tax-collector-list-message');
var TopTaxCollectorListMessage = (function (_super) {
    __extends(TopTaxCollectorListMessage, _super);
    function TopTaxCollectorListMessage() {
        this.isDungeon = false;
        _super.call(this);
    }
    TopTaxCollectorListMessage.prototype.getMessageId = function () {
        return TopTaxCollectorListMessage.ID;
    };
    TopTaxCollectorListMessage.prototype.reset = function () {
        this.isDungeon = false;
    };
    TopTaxCollectorListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TopTaxCollectorListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TopTaxCollectorListMessage.prototype.serialize = function (param1) {
        this.serializeAs_TopTaxCollectorListMessage(param1);
    };
    TopTaxCollectorListMessage.prototype.serializeAs_TopTaxCollectorListMessage = function (param1) {
        _super.prototype.serializeAs_AbstractTaxCollectorListMessage.call(this, param1);
        param1.writeBoolean(this.isDungeon);
    };
    TopTaxCollectorListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TopTaxCollectorListMessage(param1);
    };
    TopTaxCollectorListMessage.prototype.deserializeAs_TopTaxCollectorListMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.isDungeon = param1.readBoolean();
    };
    TopTaxCollectorListMessage.ID = 6565;
    return TopTaxCollectorListMessage;
})(AbstractTaxCollectorListMessage);
module.exports = TopTaxCollectorListMessage;
